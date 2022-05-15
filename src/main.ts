import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Descartar valores que no esten dentro del DTO
      forbidNonWhitelisted: true, //Lanzar un error al recibir un valor que no coincide con el DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
