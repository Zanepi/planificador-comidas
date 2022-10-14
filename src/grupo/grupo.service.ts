/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Grupo } from './grupo.interface';

@Injectable()
export class GrupoService {

    private readonly grupos: Grupo[] = [];

    buscarTodos(): Grupo[]{
        return this.grupos;
    }

    crear(grupo: Grupo){
        this.grupos.push(grupo);
    }

}
