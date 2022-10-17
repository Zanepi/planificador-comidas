import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PlatilloService } from './platillo.service';
import { Platillo } from './entities/platillo.entity';
import { CreatePlatilloInput } from './dto/create-platillo.input';
import { UpdatePlatilloInput } from './dto/update-platillo.input';
import { Alimento } from '../app.entities';

@Resolver(() => Platillo)
export class PlatilloResolver {
  constructor(private readonly platilloService: PlatilloService) {}

  @Mutation(() => Platillo)
  createPlatillo(@Args('createPlatilloInput') createPlatilloInput: CreatePlatilloInput) {
    return this.platilloService.create(createPlatilloInput);
  }

  @Query(() => [Platillo], { name: 'platillos' })
  findAll() {
    return this.platilloService.findAll();
  }

  @Query(() => Platillo, { name: 'platillo' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.platilloService.findOne(id);
  }

  @ResolveField(returns => [Alimento],{name : 'alimentos'})
  getAlimentos(@Parent() platillo: Platillo): Promise<Alimento[]>{
    return this.platilloService.getAlimentos(platillo.alimentoIDs);
  }

  @Mutation(() => Platillo)
  updatePlatillo(@Args('updatePlatilloInput') updatePlatilloInput: UpdatePlatilloInput) {
    return this.platilloService.update(updatePlatilloInput.id, updatePlatilloInput);
  }

  @Mutation(() => Platillo)
  removePlatillo(@Args('id', { type: () => Int }) id: number) {
    return this.platilloService.remove(id);
  }
}
