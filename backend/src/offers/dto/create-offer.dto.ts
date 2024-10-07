// src/offers/dto/create-offer.dto.ts

import { IsEnum, IsNumber, IsOptional, IsString, IsBoolean, IsInt, Max, Min } from 'class-validator';

export class CreateOfferDto {

  @IsString()
  name: string;
  
  @IsEnum([
    'VIPConcertNFT',
    'PersonalizedVideoNFT',
    'ExclusiveMerchNFT',
    'PrivateConcertNFT',
    'LunchDinnerNFT',
    'CollaborativeMusicNFT',
    'SignedInstrumentNFT',
    'TourBusNFT',
    'ListeningPartyNFT',
    'CustomPlaylistNFT',
    'MusicVideoNFT',
    'LimitedEditionNFT',
    'HandwrittenLyricsNFT',
    'AlbumBoxSetNFT',
    'FanZoomNFT',
  ])
  offerType: string;

  @IsInt()
  @Min(1)
  availableSlots: number;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsBoolean()
  @IsOptional()
  isRaffle?: boolean;

  @IsInt()
  @Min(1000)
  @Max(9223372036854775807)
  entrantLimit: number;

  @IsString()
  customUrl: string;
}
