/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearGrupo } from './dto/crear-grupo.dto';
import { Grupos } from './grupos.entity';

@Injectable()
export class GruposService {
    constructor(@InjectRepository(Grupos) private GruposRepository: Repository<Grupos>){}

    async buscarTodos(): Promise<Grupos[]>{        

        return this.GruposRepository.find();
    }

    async crear(crearGrupo: CrearGrupo): Promise<Grupos>{

        const nuevoGrupo = this.GruposRepository.create(crearGrupo);

        return this.GruposRepository.save(nuevoGrupo);
    }

}
