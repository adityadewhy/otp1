import {useRef, useState} from "react";

export default function Otp() {
	const [otp, setOtp] = useState(["", "", "", ""]);
	const letterRefs = useRef([]);

	function handleChange(index, value) {
		let updateOtp = [...otp];
		updateOtp[index] = value;

		if (value && index < otp.length - 1) {
			letterRefs.current[index + 1].focus();
		}

		setOtp(updateOtp);
	}

	function handleBackspace(index, event) {
		if (event.key == "Backspace" && index > 0 && index < otp.length - 1) {
			let updateOtp = [...otp];
			updateOtp[index] = "";
			letterRefs.current[index - 1].focus();
			setOtp(updateOtp);
		}
		if (event.key == "Backspace" && index == otp.length - 1) {
			if (otp[index]) {
				let updateOtp = [...otp];
				updateOtp[index] = "";
				setOtp(updateOtp);
			} else {
				let updateOtp = [...otp];
				updateOtp[index] = "";
				letterRefs.current[index - 1].focus();
				setOtp(updateOtp);
			}
		}
	}

	return (
		<div className="bg-gray-600 grid grid-cols-1 place-items-center gap-3 m-3 p-3">
			<h1 className="text-white p-3">enter the OTP below </h1>

			<div className="otpCard grid grid-cols-4 gap-4 p-3" >
				{otp.map((letter, index) => {
					return (
						<input
							className="otpLetter w-12 h-12 text-center"
							type="text"
							key={index}
							value={letter}
							maxLength={1}
							autoFocus={index === 0}
							ref={(ref) => (letterRefs.current[index] = ref)}
							onChange={(event) => handleChange(index, event.target.value)}
							onKeyDown={(event) => handleBackspace(index, event)}
						/>
					);
				})}
			</div>
			<button
				id="otpSubmitButton"
				className="bg-blue-400 text-white rounded-full p-2 m-2"
				onClick={() => console.log("thankyou")}
				value="submitOtp"
			>
				Submit OTP
			</button>
		</div>
	);
}
