import { Module } from '@nestjs/common';
import { PostgresModule } from './nest-modules/postgres-module/postgres.module';
import { UserModule } from './nest-modules/user-module/user.module';

@Module({
  imports: [PostgresModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
