import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const productionModules = environment.production
  ? [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'client'),
      }),
    ]
  : [];

@Module({
  imports: [...productionModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
