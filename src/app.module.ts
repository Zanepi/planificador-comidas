import { GrupoService } from './grupo/grupo.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrupoController } from './grupo/grupo.controller';

@Module({
  imports: [],
  controllers: [AppController, GrupoController ],
  providers: [
        GrupoService,  AppService],
})
export class AppModule {}
