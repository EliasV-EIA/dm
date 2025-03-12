import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { statusenum } from "../status.enum";
import { Max, Min } from "class-validator";

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
    @Min(1)
    @Max(100)
    strength: number;
    @Column('numeric')
    @Min(1)
    @Max(100)
    agility: number;
    @Column('numeric')
    wins: number;
    @Column('numeric')
    losses: number;
    @Column({type: 'enum', enum: statusenum, default:statusenum.alive})
    state: statusenum
}
