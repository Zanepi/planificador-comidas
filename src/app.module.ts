import { GruposService } from './grupos/grupos.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GruposModule } from './grupos/grupos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: ['dist/**/*.entity{.ts,.js}']
   })
    , GruposModule],
  controllers: [AppController ],
  providers: [
        GruposService,  AppService],
})
export class AppModule {}
