/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, Repository } from 'typeorm';
import { ObjectID } from 'mongodb'
import { CrearGrupo } from './dto/crear-grupo.dto';
import { Grupos } from './grupos.entity';

@Injectable()
export class GruposService {
    constructor(@InjectRepository(Grupos) private gruposRepository: MongoRepository<Grupos>) { }

    async buscarTodos(): Promise<Grupos[]> {

        return this.gruposRepository.find();
    }

    async buscar(id: string): Promise<Grupos>{
        return this.gruposRepository.findOneOrFail({
            where: {
                _id : new ObjectID(id)
            }
        });
    }
    

    async crear(crearGrupo: CrearGrupo): Promise<Grupos> {

        const nuevoGrupo = this.gruposRepository.create(crearGrupo);

        return this.gruposRepository.save(nuevoGrupo);
    }



}
