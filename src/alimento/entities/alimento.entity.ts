import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Grupos } from 'src/grupos/grupos.entity';
import { Column, Entity, ManyToMany, ManyToOne, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
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
  img: string;


  @Column()
  @Field(type => String)
  grupoID: string;

  @ManyToOne(() => Grupos, grupo => grupo.alimentos)
  @Field(type => Grupos)
  grupo: Grupos

  @Field()
  @Column()
  calorias: number;

  @Field()
  @Column()
  porcion: number;
}
