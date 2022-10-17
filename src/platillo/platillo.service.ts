import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb'
import { CreatePlatilloInput } from './dto/create-platillo.input';
import { UpdatePlatilloInput } from './dto/update-platillo.input';
import { Platillo } from './entities/platillo.entity';
import { AlimentoService } from '../alimento/alimento.service';
import { Alimento } from 'src/app.entities';

@Injectable()
export class PlatilloService {
  constructor(
    @InjectRepository(Platillo) private platilloRepository: MongoRepository<Platillo>,
    private alimentoService: AlimentoService
    ){}

  create(createPlatilloInput: CreatePlatilloInput) {
    const newPlatillo = this.platilloRepository.create(createPlatilloInput);

    return this.platilloRepository.save(newPlatillo);
  }

  findAll() {
    return this.platilloRepository.find();
  }

  findOne(id: string) {
    return this.platilloRepository.findOneOrFail({
      where: {
        id: new ObjectId(id)
      }
    });
  }

  getAlimentos(alimentoIDs: string[]): Promise<Alimento[]>{
    return this.alimentoService.findAllById(alimentoIDs);
  }

  update(id: number, updatePlatilloInput: UpdatePlatilloInput) {
    return `This action updates a #${id} platillo`;
  }

  remove(id: number) {
    return `This action removes a #${id} platillo`;
  }
}
