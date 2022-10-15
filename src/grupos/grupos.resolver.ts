import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrearGrupo } from './dto/crear-grupo.dto';
import { Grupos } from './grupos.entity';
import { GruposService } from './grupos.service';

@Resolver(of => Grupos)
export class GruposResolver {
    constructor(private GruposService: GruposService){}

    @Query(returns => [Grupos])
    grupos(): Promise<Grupos[]>{
        return this.GruposService.buscarTodos();
    }

    @Query(returns => Grupos)
    grupo(@Args('id',{type: () => String}) id :string): Promise<Grupos>{
        return this.GruposService.buscar(id);
    }


    @Mutation(returns => Grupos)
    crear(@Args('crearGrupo') crearGrupo: CrearGrupo): Promise<Grupos>{
        return this.GruposService.crear(crearGrupo);
    }
}
