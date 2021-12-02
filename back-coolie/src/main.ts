import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


let PORT = new ConfigService().get("PORT_BACK", 5555);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use((req, res, next) => {
    console.log("Good Test");
    next()
  })
  await app.listen(PORT);
}
bootstrap();
