import axios from "axios";

const submitForm = async ({
	firstName,
	lastName,
	amount,
	phoneNumber,
	attendance,
}: any) => {
	const headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
		Authorization: "Bearer 2|xCkinFbNY92kH2dwZ2fHW6b0W2fVFfxouIatC5xG",
	};
	const requestBody = JSON.stringify({
		reference_id: `${firstName}-${lastName}-${amount}`,
		currencyy: "KES",
		express_mpaesa: true,
		first_name: firstName,
		last_name: lastName,
		amount: attendance === "playing-golf" ? 2500 : 2000,
		callback_url: "https://wema.redcross.or.ke/nairobi-golf-charity",
		redirect_url: "https://wema.redcross.or.ke/nairobi-golf-charity",
		msisdn: phoneNumber,
	});

	let reqOptions = {
		url: "http://sandbox.finsprint.io/api/v1/request-checkout",
		method: "POST",
		headers: headersList,
		data: requestBody,
	};

	try {
		const response = await axios.request(reqOptions);
		const {
			status,
			data: {
				url,
				trace_id,
				reference_id,
				token,
				merchantCode,
				extraData,
				callbackUrl,
			},
		} = response;

		if (status === 200) {
			return {
				url,
				traceId: trace_id,
				referenceId: reference_id,
				token,
				merchantCode,
				extraData,
				callbackUrl,
			};
		}
	} catch (error) {
		console.error(error);
	}
};

export default submitForm;
