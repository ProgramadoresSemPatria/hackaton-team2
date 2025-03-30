import { useState } from "react";

export default function useDashboard() {
	const [isApplicationDetailsModalOpen, setIsApplicationDetailsModalOpen] =
		useState(false);

	function handleOpenApplicationDetailsModal(): void {
		setIsApplicationDetailsModalOpen(true);
	}

	function handleCloseApplicationDetailsModal(): void {
		setIsApplicationDetailsModalOpen(false);
	}

	return {
		handleOpenApplicationDetailsModal,
		handleCloseApplicationDetailsModal,
		isApplicationDetailsModalOpen,
	};
}
