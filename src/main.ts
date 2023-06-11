import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as sassMiddleware from 'node-sass-middleware';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';
import { RedisIoAdapter } from './adapters/redisIOAdapter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,);

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

  /// Versioning support
  app.enableVersioning({
    type: VersioningType.URI,
  });

  /// Websocket radis adapter
  /// uncomment below lines to use radis adapter
  // const redisIoAdapter = new RedisIoAdapter(app);
  // await redisIoAdapter.connectToRedis();
  // app.useWebSocketAdapter(redisIoAdapter);

  
  const configService = app.get(ConfigService);
  const port = configService.get('PORT')

  await app.listen(port, () => {
    console.log(`Successfully started on ${port}`);
  });

}
bootstrap();
