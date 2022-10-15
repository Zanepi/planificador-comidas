import { CreateAlimentoInput } from './create-alimento.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAlimentoInput extends PartialType(CreateAlimentoInput) {
  @Field(() => Int)
  id: number;
}
