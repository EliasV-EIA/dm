import { IsDecimal, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { blackstatus } from "../status.enum";

export class CreateBlackmarketDto {
    @IsString() 
    @IsNotEmpty()
    buyer_id:string;
    @IsString()
    @IsNotEmpty()
    seller_id:string;
    @IsString()
    item:string;
    @IsNumber()
    amount: number;
    @IsEnum(blackstatus)
    status: blackstatus;
    
}
