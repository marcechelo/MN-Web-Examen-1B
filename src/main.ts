import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const cookieParser = require('cookie-parser');
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(1337);
}
bootstrap();
