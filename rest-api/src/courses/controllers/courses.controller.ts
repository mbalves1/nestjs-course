// import { findAllCourses } from '../../../db-data';
import { CoursesRepository } from '../repositories/courses.repository';

import { Course } from './../../../../shared/course';
import { Controller, Get } from "@nestjs/common";

@Controller()
export class CoursesController {
  constructor(private coursesDB: CoursesRepository) {}

  @Get('/api/courses')
  async findAllCourses(): Promise<Course[]> {
    return this.coursesDB.findAll();
  }

}
