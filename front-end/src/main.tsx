import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes.tsx";
import "./index.css";
import Dashboard from "./view/pages/dashboard/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <AppRoutes />  */}
		<Dashboard />
	</StrictMode>
);
