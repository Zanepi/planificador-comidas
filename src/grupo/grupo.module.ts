import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from '../alimento/entities/alimento.entity';
import { Grupo } from './grupo.entity';
import { GrupoResolver } from './grupo.resolver';
import { GrupoService } from './grupo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grupo])]
  ,exports: [TypeOrmModule, GrupoService]
  ,providers: [GrupoService ,GrupoResolver]
})
export class GrupoModule {}
