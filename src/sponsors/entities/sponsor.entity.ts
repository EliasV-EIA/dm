import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sponsor {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text')
    company_name: string;
    @Column('text')
    donated_items: string;
    @Column('text',{
        unique:true,
        nullable:true,
    })
    preffered_fighter: string;
    
    }
