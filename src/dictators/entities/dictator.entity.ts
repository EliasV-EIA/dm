import { Max, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
        @Column('numeric')
        number_of_slaves: number;
        @Column('numeric')
        @Min(1)
        @Max(100)
        loyalty: number;        
}
