import { IsBoolean, IsString, IsUUID } from "class-validator";

export class CreateBattleDto {
    @IsString()
    @IsUUID()
    contestant_1: string;
    @IsString()
    @IsUUID()
    contestant_2: string;
    @IsString()
    @IsUUID()
    winner: string;
    @IsString()
    death_occured: string;
    @IsString()
    injuries: string;
}
