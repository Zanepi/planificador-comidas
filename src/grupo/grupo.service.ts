/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, Repository } from 'typeorm';
import { ObjectID } from 'mongodb'
import { CrearGrupo } from './dto/crear-grupo.input';
import { Grupo } from './grupo.entity';

@Injectable()
export class GrupoService {
    constructor(@InjectRepository(Grupo) private gruposRepository: MongoRepository<Grupo>) { }

    async buscarTodos(): Promise<Grupo[]> {

        return this.gruposRepository.find();
    }

    async buscar(id: string): Promise<Grupo>{
        return this.gruposRepository.findOneOrFail({
            where: {
                _id : new ObjectID(id)
            }
        });
    }
    

    async crear(crearGrupo: CrearGrupo): Promise<Grupo> {

        const nuevoGrupo = this.gruposRepository.create(crearGrupo);

        return this.gruposRepository.save(nuevoGrupo);
    }



}
