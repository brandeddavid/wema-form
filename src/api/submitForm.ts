import axios from "axios";

const submitForm = async ({
	firstName,
	lastName,
	phoneNumber,
	attendanceType,
	amount,
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
		amount,
		callback_url: "https://wema.redcross.or.ke/nairobi-golf-charity",
		redirect_url: "https://wema.redcross.or.ke/nairobi-golf-charity",
		msisdn: phoneNumber,
		payload: [
			{
				title: `${attendanceType === "playing-golf" ? "Golfer" : "Non Golfer"}`,
				quantity: 1,
				total: amount,
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
			data: { trace_id },
		} = response;

		if (status === 200) {
			return {
				traceId: trace_id,
			};
		}
	} catch (error) {
		console.error(error);
	}
};

export default submitForm;
