import React from "react";
import {useNavigate} from "react-router-dom";

export default function Phone() {
	const navigate = useNavigate();
	const handleClick = (event) => {
		const phoneEl = document.getElementById("phone");
		const enteredNum = phoneEl.value;
		if (enteredNum.length == 10) {
			navigate("/otp");
		} else {
			alert("incorrect phone format");
		}
	};

	return (
		<div className="bg-gray-600 grid grid-cols-1 place-items-center gap-3 m-3 p-3">
			<h1 className="text-white p-3">Login via OTP</h1>

			<input
				type="tel"
				id="phone"
				name="phoneNumber"
				placeholder="enter you phone number"
				className="placeholder: text-center"
			/>
			<button
				id="phoneSubmitButton"
				onClick={handleClick}
				value="submitPhone"
				className="bg-blue-400 text-white rounded-full p-2 m-2"
			>
				Send OTP
			</button>
		</div>
	);
}
