import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CrearGrupo{
    
    @IsAlpha()
    @Field()
    nombre: string;

    @Field({ nullable: true })
    img?: string;


    
}