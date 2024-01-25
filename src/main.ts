import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { readFileSync } from 'fs';
import { SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import { ValidationPipe } from './libs/extensions/pipes/validation.pipe';

export const SwaggerSetting = (app: INestApplication) => {
  const swaagerConfig = readFileSync(
    path.join(__dirname, '../../swagger.json'),
    'utf8',
  );
  SwaggerModule.setup('api', app, JSON.parse(swaagerConfig));
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerSetting(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
