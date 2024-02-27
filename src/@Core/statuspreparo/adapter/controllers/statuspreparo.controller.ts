import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SaveStatusPreparoUseCase } from "../../core/usecases/statuspreparo.use-case";
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