import { Module } from '@nestjs/common';
import { PostgresModule } from './nest-modules/postgres-module/postgres.module';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
