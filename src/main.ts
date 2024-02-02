import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  // const config = new DocumentBuilder()
  //   .setTitle('Mudapp')
  //   .setDescription(
  //     'Our company is dedicated for moving services around Barcelona',
  //   )
  //   .setVersion('1.0')
  //   .addTag('moving')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();

// esto va entre las lineas: "const app" y "await app" //
