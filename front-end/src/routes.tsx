import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./view/pages/login/Login";
import Register from "./view/pages/register/Register";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};
