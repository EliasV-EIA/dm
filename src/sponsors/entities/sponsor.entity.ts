import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Sponsor {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text')
    company_name: string;
    @Column('text')
    donated_items: string;
    @Column('uuid',{
        nullable:true,
    })
    preffered_fighter: string;
    @Column('timestamptz', {default:()=>'CURRENT_TIMESTAMP'})
    created_at: Timestamp;
    }
