import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './entities/offers.entity';
import { Repository } from 'typeorm';
import { generateCustomUrl } from './utils';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offersRepository: Repository<Offer>
  ) {}

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {

    const offer = this.offersRepository.create({
      ...createOfferDto,
      customUrl: generateCustomUrl(createOfferDto.name, createOfferDto.name)
  });
    return await this.offersRepository.save(offer);
  }

  async findAll(): Promise<Offer[]> {
    return this.offersRepository.find();
  }

  async findOne(id: number): Promise<Offer> {
    return await this.offersRepository.findOneBy({ id });
  }

  async update(id: number, updateOfferDto: UpdateOfferDto): Promise<Offer> {

    const offer = await this.offersRepository.findOneBy({ id })

    if (!offer) {
      throw new NotFoundException('Offer not found');
    }

    Object.assign(offer, updateOfferDto);
    
    return await this.offersRepository.save(offer);
  }

  async remove(id: number): Promise<Offer> {
    const offer = await this.offersRepository.findOneBy({ id })

    if (!offer) {
      throw new NotFoundException('Offer not found');
    }
    return await this.offersRepository.remove(offer);
  }
}
