import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Grupo } from '../../grupo/grupo.entity';
import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({name: "alimentos"})
@ObjectType()
export class Alimento {
  
  @ObjectIdColumn()
  @Field(type => String)
  id: ObjectID;

  @Field()
  @Column()
  nombre: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  img?: string;


  @Column()
  @Field(type => String)
  grupoID: string;

  @ManyToOne(() => Grupo, grupo => grupo.alimentos)
  @Field(type => Grupo)
  grupo: Grupo

  @Field()
  @Column()
  calorias: number;

  @Field()
  @Column()
  porcion: number;
}
