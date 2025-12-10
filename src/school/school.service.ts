import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new school
   * @param createSchoolDto
   * @returns
   */
  async create(createSchoolDto: CreateSchoolDto) {
    const createSchool = await this.prisma.schools.create({
      data: createSchoolDto,
    });
    if (createSchool) {
      return {
        statusCode: 200,
        data: createSchool,
      };
    }
  }

  /**
   * Get all school
   * @returns
   */
  async findAll() {
    const dataSchool = await this.prisma.schools.findMany();
    return {
      statusCode: 200,
      data: dataSchool,
    };
  }

  /**
   * get school by id
   * @param id
   * @returns
   */
  async findOne(id: number) {
    const dataSchool = await this.prisma.schools.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataSchool,
    };
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const updateSchool = await this.prisma.schools.update({
      where: {
        id,
      },
      data: updateSchoolDto,
    });
    if (updateSchool) {
      return {
        statusCode: 200,
        data: updateSchool,
      };
    }
  }

  /**
   * Delete school
   * @param id 
   * @returns 
   */
  async remove(id: number) {
    const deleteSchool = await this.prisma.schools.delete({
      where: {
        id,
      },
    });
    if (deleteSchool) {
      return {
        statusCode: 200,
        data: deleteSchool,
        message: 'Berhasil haspus data sekolah',
      };
    }
  }
}
