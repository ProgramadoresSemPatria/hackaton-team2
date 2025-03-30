import { useState } from "react";

export default function useDashboard() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isApplicationDetailsModalOpen, setIsApplicationDetailsModalOpen] =
    useState(false);

  function handleOpenApplicationDetailsModal(): void {
    setIsApplicationDetailsModalOpen(true);
  }

  function handleCloseApplicationDetailsModal(): void {
    setIsApplicationDetailsModalOpen(false);
  }

  function handleOpenProfileModal() {
    setIsProfileModalOpen(true);
  }

  function handleCloseProfileModal() {
    setIsProfileModalOpen(false);
  }

  return {
    handleOpenApplicationDetailsModal,
    handleCloseApplicationDetailsModal,
    isApplicationDetailsModalOpen,
    handleOpenProfileModal,
    handleCloseProfileModal,
    isProfileModalOpen,
  };
}
