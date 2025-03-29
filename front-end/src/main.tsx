import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes.tsx";
import "./index.css";
import ModalFeedbackCompany from "./view/pages/components/ModalFeedbackCompany.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);
