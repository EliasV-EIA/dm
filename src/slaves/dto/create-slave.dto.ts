import {IsEnum, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";
import { statusenum } from "../status.enum";

export class CreateSlaveDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    nickname: string;
    @IsString()
    origin: string;
    @IsNumber()
    @Min(1)
    @Max(100)
    strength: number;
    @IsNumber()
    @Min(1)
    @Max(100)
    agility: number;
    @IsNumber()
    wins: number;
    @IsNumber()
    losses: number;
    @IsEnum(statusenum)
    state: statusenum;
}
