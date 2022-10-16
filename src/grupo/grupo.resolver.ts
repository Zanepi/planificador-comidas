import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrearGrupo } from './dto/crear-grupo.input';
import { Grupo } from './grupo.entity';
import { GrupoService } from './grupo.service';

@Resolver(of => Grupo)
export class GrupoResolver {
    constructor(private GrupoService: GrupoService){}

    @Query(returns => [Grupo])
    grupos(): Promise<Grupo[]>{
        return this.GrupoService.buscarTodos();
    }

    @Query(returns => Grupo)
    grupo(@Args('id',{type: () => String}) id :string): Promise<Grupo>{
        return this.GrupoService.buscar(id);
    }


    @Mutation(returns => Grupo)
    crear(@Args('crearGrupo') crearGrupo: CrearGrupo): Promise<Grupo>{
        return this.GrupoService.crear(crearGrupo);
    }
}
