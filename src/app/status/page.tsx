"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Paper, Typography, CircularProgress } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/submitButton";
import useFormStore from "../../store/useFormStore";
import type { FormState } from "../../store/useFormStore";

const StatusPage = () => {
	const router = useRouter();
	const [counter, setCounter] = useState(10);

	const count = () => {
		if (counter === 0) return;

		if (counter > 0) {
			setTimeout(() => setCounter((prev) => prev - 1), 1000);
		}
	};

	useEffect(() => {
		count();
	});

	const isVerifying = useFormStore((state: FormState) => state.isVerifying);
	const verifyMpesaTransaction = useFormStore(
		(state: FormState) => state.verifyTransaction
	);
	const verified = useFormStore((state: FormState) => state.verified);
	const paymentStatus = useFormStore((state: FormState) => state.paymentStatus);

	return (
		<Paper
			elevation={24}
			className="bg-white h-screen md:h-auto w-full md:w-[500px] md:min-h-[500px] p-[40px] flex flex-col justify-center"
		>
			<Box>
				<Typography textAlign="center" component="div" variant="h5">
					{!verified && (
						<span>
							Complete payment by entering pin on your phone then press the
							verify button.
						</span>
					)}
					{verified && paymentStatus === "successful" && (
						<span>Your transaction has been successfully processed </span>
					)}
					{verified && paymentStatus === "failed" && (
						<span>
							Error occurred while processing your donation, please retry
						</span>
					)}
				</Typography>
			</Box>
			<Box sx={{ mt: 20 }}>
				{counter > 0 && (
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Typography color="primary">{`Verify in ${counter} ...`}</Typography>
					</Box>
				)}
				{counter < 1 && (
					<SubmitButton
						startIcon={
							isVerifying ? (
								<CircularProgress
									sx={{
										color: "#ffffff",
									}}
									size={20}
								/>
							) : null
						}
						onClick={
							verified
								? () => router.push("https://www.redcross.or.ke/")
								: verifyMpesaTransaction
						}
					>
						{verified ? "Go back" : "Verify"}
					</SubmitButton>
				)}
			</Box>
		</Paper>
	);
};

export default StatusPage;
