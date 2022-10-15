import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from '../alimento/entities/alimento.entity';
import { Grupos } from './grupos.entity';
import { GruposResolver } from './grupos.resolver';
import { GruposService } from './grupos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grupos])]
  ,exports: [TypeOrmModule, GruposService]
  ,providers: [GruposService ,GruposResolver]
})
export class GruposModule {}
