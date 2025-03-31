import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepositoryPostgresAdapter } from 'src/libs/shared/src/infrastructure/db/postgres/base-repository.adapter';
import { getDataSourceName } from 'src/nest-modules/postgres-module/typeorm.config';
import { Repository } from 'typeorm';
import { IJobApplicationRepository } from '../domain/contracts/repository/job-application.repository';
import {
  JobApplication,
  JobApplicationId,
} from '../domain/job-application.aggregate';
import { JobApplicationModel } from './job-application.model';

@Injectable()
export class JobApplicationRepositoryAdapter
  extends BaseRepositoryPostgresAdapter<JobApplication, JobApplicationModel>
  implements IJobApplicationRepository
{
  constructor(
    @InjectRepository(JobApplicationModel, getDataSourceName())
    private readonly _jobApplicationRepository: Repository<JobApplicationModel>,
  ) {
    super(_jobApplicationRepository, JobApplicationModel);
  }

  mapToDomain(
    normalizedPersistencyObject: JobApplicationModel,
  ): JobApplication {
    const jobApplication: JobApplication = new JobApplication({
      job_application_id: new JobApplicationId(normalizedPersistencyObject.id),
      name: normalizedPersistencyObject.name,
      link: normalizedPersistencyObject.link,
      status: normalizedPersistencyObject.status,
      salary: normalizedPersistencyObject.salary,
      isEquity: normalizedPersistencyObject.is_equity,
      isInternational: normalizedPersistencyObject.is_international,
      user_id: normalizedPersistencyObject.user_id,
    });
    return jobApplication;
  }
  async createJobApplication(
    JobApplication: JobApplication,
  ): Promise<JobApplication> {
    const JobApplicationEntity =
      this._jobApplicationRepository.create(JobApplication);
    const JobApplicationCreated =
      await this._jobApplicationRepository.save(JobApplicationEntity);
    return this.mapToDomain(JobApplicationCreated);
  }

  async getJobApplicationsByUser(userId: string): Promise<JobApplication[]> {
    const jobApplicationsModel = await this._jobApplicationRepository.find({
      where: { user_id: userId },
    });

    const jobApplications = jobApplicationsModel.map((item) =>
      this.mapToDomain(item),
    );

    return jobApplications;
  }
}
