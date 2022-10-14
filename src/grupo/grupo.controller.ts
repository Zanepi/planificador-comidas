import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrearGrupoDTO } from './dto/crear-grupo.dto';
import { Grupo } from './grupo.interface';
import { GrupoService } from './grupo.service';

@Controller('grupo')
export class GrupoController {

    constructor(private grupoService: GrupoService){}

    @Post()
    async crear(@Body() crearGrupoDTO: CrearGrupoDTO){
        this.grupoService.crear(crearGrupoDTO);
    }

    @Get()
    async buscarTodos(): Promise<Grupo[]>{
        return this.grupoService.buscarTodos();
    }

}
