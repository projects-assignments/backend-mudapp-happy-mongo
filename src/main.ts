import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('MUDAPP HAPPYMONGO')
  .setDescription('The Best Moving App')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('Lets move to Barcelona')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('MUDAPPHM', app, document);

  await app.listen(5000);
}
bootstrap();
