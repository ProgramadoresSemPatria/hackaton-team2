import { useState } from "react";

export default function useDashboard() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isApplicationDetailsModalOpen, setIsApplicationDetailsModalOpen] =
    useState(false);
  const [isNewInterviewOpen, setIsNewInterviewOpen] = useState(false);
  const [isUserSentiment, setIsUserSentiment] = useState(false);
  const [isFeedbackCompanyOpen, setIsFeedbackCompany] = useState(false);

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

  function handleOpenNewInterview() {
    setIsNewInterviewOpen(true);
  }

  function handleCloseNewInterview() {
    setIsNewInterviewOpen(false);
  }

  function handleOpenUserSentiment() {
    setIsUserSentiment(true);
  }

  function handleCloseUserSentiment() {
    setIsUserSentiment(false);
  }

  function handleOpenFeedbackCompany() {
    setIsFeedbackCompany(true);
  }

  function handleCloseFeedbackComapny() {
    setIsFeedbackCompany(false);
  }

  return {
    handleOpenApplicationDetailsModal,
    handleCloseApplicationDetailsModal,
    isApplicationDetailsModalOpen,
    handleOpenProfileModal,
    handleCloseProfileModal,
    isProfileModalOpen,
    handleOpenNewInterview,
    isNewInterviewOpen,
    handleCloseNewInterview,
    handleOpenUserSentiment,
    isUserSentiment,
    handleCloseUserSentiment,
    handleOpenFeedbackCompany,
    isFeedbackCompanyOpen,
    handleCloseFeedbackComapny,
  };
}
