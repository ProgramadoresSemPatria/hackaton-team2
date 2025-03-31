import { IUseCase } from 'src/libs/shared/src/domain/contracts/application/use-case';
import { ApplicationStatus } from '../../job-application.aggregate';

export type ICreateJobApplicationInput = {
  name: string;
  link: string;
  status: ApplicationStatus;
  salary: number;
  isEquity: boolean;
  isInternational: boolean;
  companyName: string;
  userId: string;
};

export type ICreateJobApplicationOutput = {
  jobApplicationId: string;
};

export abstract class ICreateJobApplicationUseCase
  implements IUseCase<ICreateJobApplicationInput, ICreateJobApplicationOutput>
{
  abstract execute(
    input: ICreateJobApplicationInput,
  ): Promise<ICreateJobApplicationOutput>;
}
