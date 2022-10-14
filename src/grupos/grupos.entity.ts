import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
@ObjectType()
export class Grupos{

    @ObjectIdColumn()
    @Field()
    id: string;


    @Column()
    @Field()
    nombre: string;

    @Column({ nullable : true })
    @Field({ nullable : true })
    img?: string;

}