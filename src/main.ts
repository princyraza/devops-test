import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;
  await app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('Listening on port', port);
  });
}
bootstrap();
