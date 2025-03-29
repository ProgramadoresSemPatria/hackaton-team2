import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes.tsx";
import "./index.css";
import Modal from "./view/components/Modal.tsx";
import ModalUserSentiment from "./view/pages/components/ModalUserSentiment.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <AppRoutes /> */}
		<ModalUserSentiment />
	</StrictMode>
);
