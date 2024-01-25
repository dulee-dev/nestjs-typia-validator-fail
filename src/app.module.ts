import { Module } from '@nestjs/common';
import { CatController } from './controllers/cat/cat.controller';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [],
})
export class AppModule {}
