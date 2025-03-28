import { IsString, IsUUID } from "class-validator";

export class CreateSponsorDto {
    @IsString()
    company_name: string;
    @IsString()
    donated_items: string
    @IsUUID()
    preffered_fighter: string;
}
