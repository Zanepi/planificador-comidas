import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './Grupos.entity';
import { GruposResolver } from './Grupos.resolver';
import { GruposService } from './Grupos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grupos])]
  ,exports: [TypeOrmModule]
  ,providers: [GruposService ,GruposResolver]
})
export class GruposModule {}
