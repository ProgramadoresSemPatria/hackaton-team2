import { ApplicationStatus } from '@core/job-application/domain/job-application.aggregate';

export class UpdateJobApplicationInputDto {
  jobApplicationsId: string;
  name?: string;
  link?: string;
  status?: ApplicationStatus;
  salary?: number;
  isEquity?: boolean;
  isInternational?: boolean;
}
