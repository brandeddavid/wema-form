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
} from "@mui/material";
import SubmitButton from "../SubmitButton/submitButton";

const attendanceType = [
	{
		label: "Playing golf 2500",
		value: "playing-golf",
	},
	{
		label: "Dinner Only 2000",
		value: "dinner-only",
	},
];

const paymentOptions = [
	{
		label: "MPESA PAYBILL",
		value: "mpesa",
	},
];

const Form = () => {
	const [attendance, setAttendance] = useState("playing-golf");
	const [paymentOption, setPaymentOption] = useState("mpesa");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	return (
		<Paper
			elevation={2}
			className="bg-white w-full md:w-[500px] p-[40px] space-y-[40px]"
		>
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
				/>
				<TextField
					placeholder="Last Name"
					onChange={(event: any) => setLastName(event.target.value)}
					label="Last Name"
					variant="standard"
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
				/>
			</Box>
			<Box>
				<FormControl>
					<FormLabel>Attending</FormLabel>
					<RadioGroup row>
						{attendanceType.map(({ label, value }) => (
							<FormControlLabel
								value={attendance}
								control={
									<Radio
										checked={attendance === value}
										onChange={() => setAttendance(value)}
									/>
								}
								label={label}
								key={value}
							/>
						))}
					</RadioGroup>
				</FormControl>
			</Box>
			<Box>
				<FormControl>
					<FormLabel>Mode of payment</FormLabel>
					<RadioGroup row name="row-radio-buttons-group">
						{paymentOptions.map(({ label, value }) => (
							<FormControlLabel
								value={attendance}
								control={
									<Radio
										checked={paymentOption === value}
										onChange={() => setPaymentOption(value)}
									/>
								}
								label={label}
								key={value}
							/>
						))}
					</RadioGroup>
				</FormControl>
			</Box>
			<Box>
				<SubmitButton>Pay</SubmitButton>
			</Box>
		</Paper>
	);
};

export default Form;
