import { useRef } from "react";
import { api } from "../../../../api/baseRequest";

enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
}

export function useModalNewInterview() {
  const roleRef = useRef<HTMLInputElement>(null);
  const salaryRef = useRef<HTMLInputElement>(null);
  const isInternationalRef = useRef<HTMLSelectElement>(null);
  const equityRef = useRef<HTMLInputElement>(null);
  const jobLinkRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const companySiteRef = useRef<HTMLInputElement>(null);
  const companyContactRef = useRef<HTMLInputElement>(null);
  const companyPhoneNumberRef = useRef<HTMLInputElement>(null);
  const applicationStatusRef = useRef<HTMLSelectElement>(null);
  const interviewDateRef = useRef<HTMLInputElement>(null);

  async function handleNewInterview(callback: () => void) {
    const role = roleRef.current?.value;
    const salary = Number(salaryRef.current?.value) || 0;
    const isInternational = isInternationalRef.current?.value;
    const hasEquity = Number(equityRef.current?.value || 0) > 0;
    const jobLink = jobLinkRef.current?.value;
    const companyName = companyNameRef.current?.value;
    const applicationStatus = applicationStatusRef.current?.value;

    try {
      const response = await api.post("job-application", {
        name: role,
        link: jobLink,
        status: applicationStatus,
        isInternational: isInternational,
        isEquity: hasEquity,
        salary: salary,
        companyName: companyName,
        JobApplication_id: "123e4567-e89b-12d3-a456-426614174000",
        userId: "8a3c5075-72f7-411f-bb89-4c07b04d7f34",
      });

      if (
        response.status === STATUS_CODE.OK ||
        response.status === STATUS_CODE.CREATED
      ) {
        alert("Candidatura cadastrada com sucesso!");
        callback();
        return;
      }

      alert("Erro ao cadastrar candidatura. Por favor, tente novamente");
    } catch (error) {
      console.error("Erro ao cadastrar candidatura: ", error);
    }
  }

  return {
    roleRef,
    salaryRef,
    isInternationalRef,
    equityRef,
    jobLinkRef,
    companyNameRef,
    companySiteRef,
    companyContactRef,
    companyPhoneNumberRef,
    applicationStatusRef,
    interviewDateRef,
    handleNewInterview,
  };
}
