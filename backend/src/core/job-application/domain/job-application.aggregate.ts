import { EntityBase } from 'src/libs/shared/src/data-layer/entities/entity-base';
import { Uuid } from 'src/libs/shared/src/domain/models/value-objects/uuid.vo';
import { JobApplicationFakerBuilder } from './job-application-fake.builder';

export enum ApplicationStatus {
  APPLIED = 'applied',
  SCREENING = 'screening',
  INTERVIEW = 'interview',
  TECHNICAL_INTERVIEW = 'technical_interview',
  OFFER = 'offer',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  WITHDRAWN = 'withdrawn',
}

export type JobApplicationConstructorProps = {
  job_application_id?: JobApplicationId;
  name: string;
  link: string;
  status: ApplicationStatus;
  salary: number;
  isEquity: boolean;
  isInternational: boolean;
  user_id: string;
  company_name: string;
};

export type JobApplicationCreateCommand = {
  name: string;
  link: string;
  status?: ApplicationStatus;
  salary: number;
  isEquity: boolean;
  isInternational: boolean;
  user_id: string;
  company_name: string;
};

export class JobApplicationId extends Uuid {}

export class JobApplication extends EntityBase {
  job_application_id: JobApplicationId;
  name: string;
  link: string;
  status: ApplicationStatus;
  salary: number;
  isEquity: boolean;
  isInternational: boolean;
  user_id: string;
  company_name: string;

  constructor(props: JobApplicationConstructorProps) {
    super();
    this.job_application_id =
      props.job_application_id ?? new JobApplicationId();
    this.name = props.name;
    this.link = props.link;
    this.status = props.status;
    this.salary = props.salary;
    this.isEquity = props.isEquity;
    this.isInternational = props.isInternational;
    this.user_id = props.user_id;
    this.company_name = props.company_name;
  }

  static create(props: JobApplicationCreateCommand) {
    const jobApplication = new JobApplication({
      ...props,
      status: props.status ?? ApplicationStatus.APPLIED,
    });
    return jobApplication;
  }

  defineName(name: string): JobApplication {
    this.name = name;
    return this;
  }

  defineLink(link: string): JobApplication {
    this.link = link;
    return this;
  }

  updateStatus(status: ApplicationStatus): JobApplication {
    this.status = status;
    return this;
  }

  updateEquity(isEquity: boolean): JobApplication {
    this.isEquity = isEquity;
    return this;
  }

  updateInternational(isInternational: boolean): JobApplication {
    this.isInternational = isInternational;
    return this;
  }

  updateSalary(salary: number): JobApplication {
    if (salary >= 0) this.salary = salary;
    return this;
  }

  static fake() {
    return JobApplicationFakerBuilder;
  }

  get entity_id() {
    return this.job_application_id;
  }

  toJSON() {
    return {
      job_application_id: this.job_application_id.id,
      name: this.name,
      link: this.link,
      status: this.status,
      salary: this.salary,
      isEquity: this.isEquity,
      isInternational: this.isInternational,
    };
  }
}
