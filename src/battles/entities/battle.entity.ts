import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Battle {

    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('uuid')
    contestant_1:string;
    @Column('uuid')
    contestant_2:string;
    @Column('uuid',{
        nullable:true,
        default:null
    })
    winner: string;
    @Column('boolean')
    death_occured: boolean
    @Column('string')
    injuries: string
    @Column('timestamp', {default:()=>'CURRENT_TIMESTAMP'})
    date: Timestamp
}
