import { GrupoService } from './grupo/grupo.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrupoModule } from './grupo/grupo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentoModule } from './alimento/alimento.module';
import {Grupo, Alimento} from './app.entitites'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver
      ,autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    })
    ,TypeOrmModule.forRoot({ 
      type: 'mongodb', 
      host: 'localhost', 
      port: 27017, 
      database: 'planificador-comidas', 
      synchronize: true,    
      entities: [Grupo, Alimento]// 'dist/**/*.entity{.ts,.js}']
   })
    , GrupoModule, AlimentoModule],
  controllers: [AppController ],
  providers: [GrupoService,  AppService],
})
export class AppModule {}
