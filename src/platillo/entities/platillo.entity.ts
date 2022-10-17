import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Alimento } from '../../app.entities';
import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity({ name: "platillos"})
export class Platillo {
  
  @ObjectIdColumn()
  @Field(type => String)
  id: ObjectID;

  @Field()
  @Column()
  nombre: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  img?: string;

  @Field(type => [String],{ nullable: true })
  @Column({ nullable: true })
  alimentoIDs: string[];

  @Field(type => [Alimento],{ nullable: true })
  @Column({ nullable: true })
  alimentos: Alimento[];


}
