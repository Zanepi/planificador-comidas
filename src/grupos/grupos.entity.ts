import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

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

}