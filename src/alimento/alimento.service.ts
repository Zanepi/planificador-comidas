import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb'
import { CreateAlimentoInput } from './dto/create-alimento.input';
import { UpdateAlimentoInput } from './dto/update-alimento.input';
import { Alimento } from './entities/alimento.entity';
import { GruposService } from '../grupos/grupos.service';
import { Grupos } from '../app.entitites';

@Injectable()
export class AlimentoService {
  constructor(@InjectRepository(Alimento) private alimentoRepository: MongoRepository<Alimento>, private gruposService: GruposService){}

  create(createAlimentoInput: CreateAlimentoInput) {
    const newAlimento = this.alimentoRepository.create(createAlimentoInput);

    return this.alimentoRepository.save(newAlimento);
  }

  findAll() {
    return this.alimentoRepository.find();
  }

  findOne(id: string) {
    return this.alimentoRepository.findOneByOrFail({
      where: {
        _id: new ObjectId(id)
      }
    })
  }

  getGrupo(grupoID : string): Promise<Grupos>{
    return this.gruposService.buscar(grupoID);
  }

  update(id: number, updateAlimentoInput: UpdateAlimentoInput) {
    return `This action updates a #${id} alimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} alimento`;
  }
}
