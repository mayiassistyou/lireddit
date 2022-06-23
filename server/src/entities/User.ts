import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field()
  @Property({ type: "date" })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: "string", unique: true })
  username: string;

  @Property({ type: "string" })
  password: string;
}
