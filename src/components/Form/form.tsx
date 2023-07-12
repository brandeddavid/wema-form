"use client";
import React, { useState } from "react";
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
} from "@mui/material";
import SubmitButton from "../SubmitButton/submitButton";
import submitForm from "../../api/submitForm";
import useFormStore from "../../store/useFormStore";
import type { FormState } from "../../store/useFormStore";

const Form = () => {
	const attendanceType = useFormStore(
		(state: FormState) => state.attendanceType
	);
	const selectedAttendance = useFormStore(
		(state: FormState) => state.selectedAttendance
	);
	const firstName = useFormStore((state: FormState) => state.firstName);
	const lastName = useFormStore((state: FormState) => state.lastName);
	const email = useFormStore((state: FormState) => state.email);
	const phoneNumber = useFormStore((state: FormState) => state.phoneNumber);

	const setSelectedAttendance = useFormStore(
		(state: FormState) => state.setSelectedAttendance
	);
	const setFirstName = useFormStore((state: FormState) => state.setFirstName);
	const setLastName = useFormStore((state: FormState) => state.setLastName);
	const setEmail = useFormStore((state: FormState) => state.setEmail);
	const setPhoneNumber = useFormStore(
		(state: FormState) => state.setPhoneNumber
	);

	return (
		<Paper elevation={24} className="bg-white w-full md:w-[500px] p-[40px]">
			<Box>
				<Typography variant="h5">
					Register for the Annual Charity Golf Tournament
				</Typography>
			</Box>
			<Box sx={{ marginBottom: 10 }}>
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
						placeholder="First Name"
						onChange={(event: any) => setFirstName(event.target.value)}
						label="First Name"
						variant="standard"
						sx={{ flex: 1, marginRight: 10 }}
						value={firstName}
					/>
					<TextField
						placeholder="Last Name"
						onChange={(event: any) => setLastName(event.target.value)}
						label="Last Name"
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
						placeholder="Email"
						onChange={(event: any) => setEmail(event.target.value)}
						label="Email"
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
						label="Phone number"
						type="number"
						variant="standard"
						value={phoneNumber}
					/>
				</Box>
				<Box>
					<FormControl>
						<FormLabel>Attending</FormLabel>
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
				<Box>
					<SubmitButton
						onClick={async (event) => {
							event.preventDefault();

							await submitForm({
								attendance: selectedAttendance.value,
								firstName,
								lastName,
								phoneNumber,
							});
						}}
					>
						Pay via MPESA
					</SubmitButton>
				</Box>
			</div>
		</Paper>
	);
};

export default Form;
