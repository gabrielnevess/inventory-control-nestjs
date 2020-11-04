import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as env from 'dotenv';
env.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
