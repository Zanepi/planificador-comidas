import { Module } from '@nestjs/common';
import { PlatilloService } from './platillo.service';
import { PlatilloResolver } from './platillo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platillo } from './entities/platillo.entity';
import { AlimentoModule } from '../alimento/alimento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Platillo]), AlimentoModule]
  ,exports: [TypeOrmModule]
  ,providers: [PlatilloResolver, PlatilloService]
})
export class PlatilloModule {}
