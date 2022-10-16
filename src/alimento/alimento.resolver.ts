import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { AlimentoService } from './alimento.service';
import { Alimento } from './entities/alimento.entity';
import { CreateAlimentoInput } from './dto/create-alimento.input';
import { UpdateAlimentoInput } from './dto/update-alimento.input';
import { Grupo } from '../app.entities';

@Resolver((of) => Alimento)
export class AlimentoResolver {
  constructor(private readonly alimentoService: AlimentoService) {}

  @Mutation(() => Alimento)
  createAlimento(@Args('createAlimentoInput') createAlimentoInput: CreateAlimentoInput) {
    return this.alimentoService.create(createAlimentoInput);
  }

  @Query(() => [Alimento], { name: 'alimentos' })
  findAll() {
    return this.alimentoService.findAll();
  }

  @Query(() => Alimento, { name: 'alimento' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.alimentoService.findOne(id);
  }

  @ResolveField(returns => Grupo)
  grupo(@Parent() alimento: Alimento): Promise<Grupo>{
    return this.alimentoService.getGrupo(alimento.grupoID);
  }

  @Mutation(() => Alimento)
  updateAlimento(@Args('updateAlimentoInput') updateAlimentoInput: UpdateAlimentoInput) {
    return this.alimentoService.update(updateAlimentoInput.id, updateAlimentoInput);
  }

  @Mutation(() => Alimento)
  removeAlimento(@Args('id', { type: () => Int }) id: number) {
    return this.alimentoService.remove(id);
  }
}
