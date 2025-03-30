import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CreateUserModule } from './create-user/create-user.module';
import { SigninModule } from './signin/signin.module';

@Module({
  imports: [
    CreateUserModule,
    SigninModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class UserModule {}
