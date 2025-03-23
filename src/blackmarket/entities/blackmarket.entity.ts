import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp, UUID } from "typeorm/driver/mongodb/bson.typings";
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
    @Column('enum', {default:status.completed})
    status: status
    @Column('timestamptz', {default:()=>'CURRENT_TIMESTAMP'})
    created_at: Timestamp
}
