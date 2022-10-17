import { InputType, Int, Field } from '@nestjs/graphql';
import { Alimento } from 'src/app.entities';

@InputType()
export class CreatePlatilloInput { 

  @Field()
  nombre: string

  @Field({ nullable: true })
  img?: string;

  @Field(type => [String],{ nullable: true })
  alimentoIDs: string[];
  
}
