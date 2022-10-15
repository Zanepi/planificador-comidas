import { Field, ObjectType } from "@nestjs/graphql";
import { Alimento } from "../alimento/entities/alimento.entity";
import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";

@Entity()
@ObjectType()
export class Grupos{

    @ObjectIdColumn()
    @Field(type => String)
    _id: ObjectID;


    @Column()
    @Field()
    nombre: string;

    @Column({ nullable : true })
    @Field({ nullable : true })
    img?: string;

    @OneToMany(() => Alimento, alimento => alimento.grupo)
    @Field(type => [Alimento], { nullable: true })
    alimentos?: Alimento[];

}