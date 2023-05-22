import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: 'cat1',
      age: 1,
      breed: 'American Wirehair Cat Breed',
      image:
        'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg',
      id: 1,
    },
    {
      name: 'cat2',
      age: 2,
      breed: 'American Bobtail Cat Breed',
      image:
        'https://cdn.pixabay.com/photo/2020/11/26/11/48/cat-5778777_960_720.jpg',
      id: 2,
    },
  ];

  create(createCatDto: CreateCatDto) {
    const newCat: Cat = { ...createCatDto };
    newCat.id = this.cats.length + 1;
    this.cats.push(newCat);
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
