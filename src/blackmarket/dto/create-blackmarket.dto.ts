import { IsDecimal, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { status } from "../status.enum";

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
    @IsEnum(status)
    status: status;
    
}
