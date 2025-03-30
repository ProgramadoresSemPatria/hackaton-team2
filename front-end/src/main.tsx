import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes.tsx";
import "./index.css";
import ModalNewInterview from "./view/pages/components/ModalNewInterview.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <AppRoutes /> */}
		<ModalNewInterview />
	</StrictMode>
);
