import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  * as dotenv from 'dotenv'
async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule);
  console.log(__dirname)
  app.useGlobalPipes(new ValidationPipe());

  await app.listen( process.env.APP_PORT || 3000);
}
bootstrap();
