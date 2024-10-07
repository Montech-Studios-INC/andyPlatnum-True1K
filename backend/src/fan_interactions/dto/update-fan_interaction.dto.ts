import { PartialType } from '@nestjs/mapped-types';
import { CreateFanInteractionDto } from './create-fan_interaction.dto';

export class UpdateFanInteractionDto extends PartialType(CreateFanInteractionDto) {}
