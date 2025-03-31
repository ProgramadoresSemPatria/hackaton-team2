import { useState } from "react";
import { JobApplication } from "../../../types/PropsJobApplication";
import { api } from "../../../api/baseRequest";

export default function useDashboard() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isApplicationDetailsModalOpen, setIsApplicationDetailsModalOpen] =
    useState(false);
  const [isNewInterviewOpen, setIsNewInterviewOpen] = useState(false);
  const [isUserSentiment, setIsUserSentiment] = useState(false);
  const [isFeedbackCompanyOpen, setIsFeedbackCompany] = useState(false);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [selectedApplication, setSelectedApplication] =
    useState<JobApplication>({} as JobApplication);

  function handleOpenApplicationDetailsModal(
    application: JobApplication
  ): void {
    setSelectedApplication(application);
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

  async function handleGetApplications(): Promise<void> {
    // TODO: Remove this after pull request with AuthContext implementation be merged.
    const userId = "8a3c5075-72f7-411f-bb89-4c07b04d7f34";
    const token = localStorage.getItem("token");
    try {
      const response = await api.get(`job-applications/?${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobApplications(response.data.data.applicationJobs);
    } catch (error) {
      console.error("Erro ao carregar candidaturas: ", error);
    }
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
    handleGetApplications,
    jobApplications,
    selectedApplication,
  };
}
