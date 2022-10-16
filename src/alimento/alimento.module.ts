import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoResolver } from './alimento.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './entities/alimento.entity';
import { GrupoService } from '../grupo/grupo.service';
import { GrupoModule } from '../grupo/grupo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento]),GrupoModule]
  ,exports: [TypeOrmModule]
  ,providers: [AlimentoResolver, AlimentoService]
})
export class AlimentoModule {}
