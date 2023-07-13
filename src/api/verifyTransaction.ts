import axios from "axios";

const verifyTransaction = async ({ traceId }: any) => {
	const headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
		Authorization: "Bearer 6|wf3BKDxbhwyfJJkb7ffdcm36MEKuSwb7YuKAl0D4",
		"Access-Control-Allow-Origin": "*",
	};

	let reqOptions = {
		url: `https://sandbox.finsprint.io/api/v1/transactions?trace_id=${traceId}`,
		method: "GET",
		headers: headersList,
	};

	try {
		const response = await axios.request(reqOptions);
		const {
			status,
			data: {
				data: { data },
			},
		} = response;

		const decodedStatus = data[0].decoded_status;

		if (status === 200) {
			return {
				decodedStatus,
			};
		}
	} catch (error) {
		console.error(error);
	}
};

export default verifyTransaction;
