import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { status } from "../status.enum";

@Entity()
export class Blackmarket {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column('uuid')
    buyer_id: string
    @Column('uuid')
    seller_id: string
    @Column('text')
    item: string
    @Column('decimal')
    amount: number
    @Column('enum')
    status: status
}
