import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveStatusPreparoUseCase } from "../../../application/ports/in/statuspreparo.use-case";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
//import { UpdateStatusPreparoRequest } from "./update-StatusPreparo.request";

@Controller('StatusPreparo')
export class SaveStatusPreparoController {
    constructor(private readonly saveStatusPreparoUseCase: SaveStatusPreparoUseCase) { }

    @Get()
    @ApiTags('StatusPreparo')
    async getAllStatusPreparo() {
        let status = await this.saveStatusPreparoUseCase.getAllStatusPreparos();
        return status
    }


}