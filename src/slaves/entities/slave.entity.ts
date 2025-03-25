import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { statusenum } from "../status.enum";
import { Max, Min } from "class-validator";
import { Exclude } from "class-transformer";
import { Dictator } from "src/dictators/entities/dictator.entity";

@Entity()
export class Slave {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column('text',{
        unique:true,
        nullable:false,
    })
    name: string;
    @Column('text', {default:'N/A'})
    nickname: string;
    @Column('text', {default: 'N/A', nullable:false})
    origin: string;
    @Column('numeric', {default:0})
    strength: number;
    @Column('numeric', {default:0})
    agility: number;
    @Column('numeric', {default:0})
    @Column('numeric', {default:0})
    losses: number;
    @Column({type: 'enum', enum: statusenum, default:statusenum.alive})
    state: statusenum;
    @Column('timestamptz', {default:()=> 'CURRENT_TIMESTAMP'})
    created_at: Timestamp;
    @Exclude()
    @ManyToOne(()=>Dictator,dictator=>dictator.slaves)
    dictator:Dictator;
}
