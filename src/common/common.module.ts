import { Module } from '@nestjs/common';
import { ConfigProvider } from './config/config.provider';
import { DatabaseProvider } from './database/database.provider';
import { DataBaseService } from './database/database.service';

@Module({
  providers: [DatabaseProvider, ConfigProvider, DataBaseService],
  exports: [DatabaseProvider, ConfigProvider, DataBaseService]
})

export class CommonModule {}
