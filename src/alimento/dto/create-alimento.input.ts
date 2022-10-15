import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlimentoInput {
  @Field()
  nombre: string

  @Field({ nullable: true })
  img?: string;

  @Field(type => String)
  grupoID: string;

  @Field()
  calorias: number;

  @Field()
  porcion: number;
}
