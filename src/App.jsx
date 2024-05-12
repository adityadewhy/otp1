import {BrowserRouter, Routes, Route} from "react-router-dom";
import Phone from "./pages/Phone";
import Otp from "./pages/Otp";

export default function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/phone" element={<Phone />}></Route>
					<Route path="/otp" element={<Otp />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
