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
    @IsBoolean()
    death_occured: boolean;
    @IsString()
    injuries: string;
}
