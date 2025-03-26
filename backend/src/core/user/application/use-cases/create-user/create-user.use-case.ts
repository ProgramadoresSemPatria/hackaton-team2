import { IUserRepository } from '../../../domain/contracts/repository/user.repository';
import {
  ICreateUserInput,
  ICreateUserUseCase,
} from '../../../domain/contracts/use-cases/create-user';
import { User } from '../../../domain/user.aggregate';

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ name, email, password }: ICreateUserInput): Promise<void> {
    const entity = User.create({ name, email, password });
    await this.userRepository.create(entity);
  }
}
