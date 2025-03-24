import { Exclude } from "class-transformer";
import { Max, Min } from "class-validator";
import { Slave } from "src/slaves/entities/slave.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Dictator {
        @PrimaryGeneratedColumn('uuid')
        id:string
        @Column('text',{
            unique:true,
            nullable:false,
        })
        name: string;
        @Column('text')
        territory:string;
        @Column('numeric', {default:0})
        number_of_slaves: number;
        @Column('numeric', {default:100})
        loyalty: number;
        @Column('timestamptz', {default:()=> 'CURRENT_TIMESTAMP'})
        created_at: Timestamp;
        @Exclude()
        @OneToMany(()=>Slave,slave=>slave.origin)
        slaves:Slave[];
}
