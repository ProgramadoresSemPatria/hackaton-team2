import { ApplicationStatus } from '@core/job-application/domain/job-application.aggregate';
import { validateSync } from 'class-validator';

export type CreateJobApplicationInputConstructorProps = {
  name: string;
  link: string;
  status: ApplicationStatus;
  salary: number;
  isEquity: boolean;
  isInternational: boolean;
  JobApplication_id: string;
  companyName: string;
  userId: string;
};

export class CreateJobApplicationInputDto {
  name: string;
  link: string;
  JobApplication_id: string;
  status: ApplicationStatus;
  isEquity: boolean;
  isInternational: boolean;
  salary: number;
  companyName: string;
  userId: string;

  constructor(props: CreateJobApplicationInputConstructorProps) {
    if (!props) return;
    this.name = props.name;
    this.link = props.link;
    this.JobApplication_id = props.JobApplication_id;
    this.status = props.status;
    this.isEquity = props.isEquity;
    this.isInternational = props.isInternational;
    this.salary = props.salary;
    this.companyName = props.companyName;
    this.userId = props.userId;
  }
}

export class ValidateCreateJobApplicationInput {
  static validate(input: CreateJobApplicationInputDto) {
    return validateSync(input);
  }
}
