import { Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsor } from './entities/sponsor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SponsorsService {
  constructor(
    @InjectRepository(Sponsor)
    private readonly sponsorRepository:Repository<Sponsor>
  ){}
  async create(createSponsorDto: CreateSponsorDto): Promise<Sponsor> {
    const newSponsor=this.sponsorRepository.create(createSponsorDto);
    await this.sponsorRepository.save(newSponsor)
    return newSponsor;
  }

  findAll() {
    return this.sponsorRepository.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} sponsor`;
  }

  update(id: string, updateSponsorDto: UpdateSponsorDto) {
    return `This action updates a #${id} sponsor`;
  }

  remove(id: string) {
    return `This action removes a #${id} sponsor`;
  }
}
