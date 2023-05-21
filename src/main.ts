import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as sassMiddleware from 'node-sass-middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const nodeSassMiddleware = sassMiddleware({
    src: path.join(__dirname, '..', 'public'),
    dest: path.join(__dirname, '..', 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true,
  });

  app.use(nodeSassMiddleware);
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('pug');

  await app.listen(3000);
}
bootstrap();
