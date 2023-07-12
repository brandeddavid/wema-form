"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
	Box,
	TextField,
	Paper,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormLabel,
	Typography,
	CircularProgress,
} from "@mui/material";
import SubmitButton from "../SubmitButton/submitButton";
import useFormStore from "../../store/useFormStore";
import type { FormState } from "../../store/useFormStore";

const Form = () => {
	const router = useRouter();
	const attendanceType: any = useFormStore(
		(state: FormState) => state.attendanceType
	);
	const selectedAttendance = useFormStore(
		(state: FormState) => state.selectedAttendance
	);
	const firstName = useFormStore((state: FormState) => state.firstName);
	const lastName = useFormStore((state: FormState) => state.lastName);
	const email = useFormStore((state: FormState) => state.email);
	const phoneNumber = useFormStore((state: FormState) => state.phoneNumber);
	const isSubmitting = useFormStore((state: FormState) => state.isSubmitting);
	const paymentStatus = useFormStore((state: FormState) => state.paymentStatus);

	const setSelectedAttendance = useFormStore(
		(state: FormState) => state.setSelectedAttendance
	);
	const setFirstName = useFormStore((state: FormState) => state.setFirstName);
	const setLastName = useFormStore((state: FormState) => state.setLastName);
	const setEmail = useFormStore((state: FormState) => state.setEmail);
	const setPhoneNumber = useFormStore(
		(state: FormState) => state.setPhoneNumber
	);
	const submitForm = useFormStore((state: FormState) => state.submitForm);

	useEffect(() => {
		if (paymentStatus === "processing") router.push("/status");
	}, [paymentStatus, router]);

	return (
		<Paper
			elevation={24}
			className="bg-white h-screen md:h-auto w-full md:w-[500px] p-[40px] flex flex-col justify-evenly"
		>
			<Box sx={{ marginBottom: 10 }}>
				<Typography variant="h5">
					Register for the Annual Charity Golf Tournament
				</Typography>
				<Typography variant="caption">
					Register to support Kenya Red Cross in the Annual Charity Golf
					Tournament at Muthaiga Golf Club{" "}
				</Typography>
			</Box>
			<div className="space-y-[40px]">
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<TextField
						onChange={(event: any) => setFirstName(event.target.value)}
						placeholder="First Name"
						variant="standard"
						sx={{ flex: 1, marginRight: 10 }}
						value={firstName}
					/>
					<TextField
						onChange={(event: any) => setLastName(event.target.value)}
						placeholder="Last Name"
						variant="standard"
						sx={{ flex: 1, marginLeft: 10 }}
						value={lastName}
					/>
				</Box>
				<Box>
					<TextField
						sx={{
							width: "100%",
						}}
						onChange={(event: any) => setEmail(event.target.value)}
						placeholder="Email"
						type="email"
						variant="standard"
						value={email}
					/>
				</Box>
				<Box>
					<TextField
						sx={{
							width: "100%",
						}}
						required
						onChange={(event: any) => setPhoneNumber(event.target.value)}
						placeholder="Phone Number"
						type="number"
						variant="standard"
						value={phoneNumber}
					/>
				</Box>
				<Box>
					<FormControl>
						<FormLabel>Attendance Type</FormLabel>
						<RadioGroup row>
							{attendanceType.map(({ label, value, amount }: any) => (
								<FormControlLabel
									value={selectedAttendance.value}
									control={
										<Radio
											checked={selectedAttendance.value === value}
											onChange={() => {
												setSelectedAttendance({ label, value, amount });
											}}
										/>
									}
									label={`${label} ${amount}`}
									key={value}
								/>
							))}
						</RadioGroup>
					</FormControl>
				</Box>
			</div>
			<Box sx={{ mt: 20 }}>
				<SubmitButton
					startIcon={
						isSubmitting ? (
							<CircularProgress
								sx={{
									color: "#ffffff",
								}}
								size={20}
							/>
						) : null
					}
					onClick={submitForm}
				>
					Pay via MPESA
				</SubmitButton>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						marginTop: 5,
					}}
				>
					<Typography variant="caption" color="primary">
						<Link href="https://wema.redcross.or.ke/nairobi-golf-charity/">
							Go back
						</Link>
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default Form;
