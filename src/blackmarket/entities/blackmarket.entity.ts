import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp, UUID } from "typeorm/driver/mongodb/bson.typings";
import { blackstatus } from "../status.enum";

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
    @Column( {type:'enum',enum:blackstatus, default:blackstatus.completed})
    status: blackstatus;
    @Column('timestamptz', {default:()=>'CURRENT_TIMESTAMP'})
    created_at: Timestamp
}
