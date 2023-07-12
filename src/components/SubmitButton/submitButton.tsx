import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const SubmitButton = styled(Button)(({ theme }) => ({
	backgroundColor: "#ed1c24 !important",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
	borderRadius: "10px",
	color: "#ffffff",
	background: "primary.main",
	border: "1px solid #ed1c24",
	width: "100%",
}));

export default SubmitButton;
