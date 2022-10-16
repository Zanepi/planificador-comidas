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
import { ormconfig } from './config/ormconfig';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver
      ,autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    })
    ,TypeOrmModule.forRoot(ormconfig)
    , GrupoModule, AlimentoModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
