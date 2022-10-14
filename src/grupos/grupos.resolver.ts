import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrearGrupo } from './dto/crear-grupo.dto';
import { Grupos } from './Grupos.entity';
import { GruposService } from './Grupos.service';

@Resolver(of => Grupos)
export class GruposResolver {
    constructor(private GruposService: GruposService){}

    @Query(returns => [Grupos])
    grupo(): Promise<Grupos[]>{
        return this.GruposService.buscarTodos();
    }

    @Mutation(returns => Grupos)
    crear(@Args('crearGrupo') crearGrupo: CrearGrupo): Promise<Grupos>{
        return this.GruposService.crear(crearGrupo);
    }
}
