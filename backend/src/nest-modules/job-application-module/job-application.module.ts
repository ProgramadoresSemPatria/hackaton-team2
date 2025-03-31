import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CreateJobApplicationModule } from './create-application-job/create-job-application.module';
import { GetJobAppicationModule } from './get-application-job/get-application-job.module';

@Module({
  imports: [
    CreateJobApplicationModule,
    GetJobAppicationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class JobApplicationModule {}
