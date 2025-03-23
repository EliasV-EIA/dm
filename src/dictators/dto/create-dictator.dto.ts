import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateDictatorDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    territory: string;
    @IsNumber()
    number_of_slaves:number;
    @IsNumber()
    @Min(1)
    @Max(100)
    loyalty: number;
}
