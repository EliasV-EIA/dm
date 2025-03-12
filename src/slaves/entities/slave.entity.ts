import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { statusenum } from "../status.enum";

@Entity()
export class Slave {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column('text',{
        unique:true,
        nullable:false,
    })
    name: string;
    @Column('text')
    nickname: string;
    @Column('text')
    origin: string;
    @Column('numeric')
    strength: number;
    @Column()
    agility: number;
    @Column()
    wins: number;
    @Column()
    losses: number;
    @Column({type: 'enum', enum: statusenum, default:statusenum.alive})
    state: statusenum
}
