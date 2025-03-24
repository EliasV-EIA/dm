import { IsDecimal, IsEnum, IsNotEmpty, IsString } from "class-validator";
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
    @IsDecimal()
    amount: number;
    @IsEnum(blackstatus)
    status: blackstatus;
    
}
