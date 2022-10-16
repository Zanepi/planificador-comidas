import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoResolver } from './alimento.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './entities/alimento.entity';
import { GruposService } from '../grupo/grupo.service';
import { GruposModule } from 'src/grupo/grupo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento]),GruposModule]
  ,exports: [TypeOrmModule]
  ,providers: [AlimentoResolver, AlimentoService]
})
export class AlimentoModule {}
