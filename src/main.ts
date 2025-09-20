import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Usuarios')
    .setDescription('Documentación de la API con Swagger')
    .setVersion('1.0')
    .addTag('users')              // etiqueta opcional
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // url => http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
