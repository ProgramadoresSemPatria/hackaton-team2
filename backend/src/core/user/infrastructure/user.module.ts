import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  allModels,
  getDataSourceName,
} from 'src/nest-modules/postgres-module/typeorm.config';

@Module({
  imports: [TypeOrmModule.forFeature([...allModels], getDataSourceName())],
  providers: [],
  exports: [],
})
export class UserRepositoryModule {}
