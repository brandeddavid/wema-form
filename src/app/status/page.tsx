"use client";
import React from "react";
import { Box, Paper, Typography, CircularProgress } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/submitButton";

const StatusPage = () => {
	return (
		<Paper
			elevation={24}
			className="bg-white h-screen md:h-auto w-full md:w-[500px] md:min-h-[500px] p-[40px] flex flex-col justify-center"
		>
			<Box>
				<Typography variant="h5">
					Complete payment by entering pin on your phone then press the verify
					button.
				</Typography>
			</Box>
			<Box sx={{ mt: 20 }}>
				<SubmitButton
				// startIcon={
				// 	isSubmitting ? (
				// 		<CircularProgress
				// 			sx={{
				// 				color: "#ffffff",
				// 			}}
				// 			size={20}
				// 		/>
				// 	) : null
				// }
				// onClick={submitForm}
				>
					Verify
				</SubmitButton>
			</Box>
		</Paper>
	);
};

export default StatusPage;
