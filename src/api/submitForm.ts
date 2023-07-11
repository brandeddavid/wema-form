import axios from "axios";

const submitForm = async ({
	firstName,
	lastName,
	phoneNumber,
	attendance,
}: any) => {
	const headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
		Authorization: "Bearer 6|wf3BKDxbhwyfJJkb7ffdcm36MEKuSwb7YuKAl0D4",
		"Access-Control-Allow-Origin": "*",
	};
	const requestBody = JSON.stringify({
		reference_id: phoneNumber,
		currency: "KES",
		express_mpesa: true,
		first_name: firstName,
		last_name: lastName,
		amount: attendance === "playing-golf" ? 2500 : 2000,
		callback_url: "https://wema.redcross.or.ke/nairobi-golf-charity",
		redirect_url: "https://wema.redcross.or.ke/nairobi-golf-charity",
		msisdn: phoneNumber,
		payload: [
			{
				title: `${attendance === "playing-golf" ? "Golfer" : "Non Golfer"}`,
				quantity: 1,
				total: attendance === "playing-golf" ? 2500 : 2000,
			},
		],
	});

	let reqOptions = {
		url: "https://sandbox.finsprint.io/api/v1/request-checkout",
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
