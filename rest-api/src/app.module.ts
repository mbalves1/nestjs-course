import { Module } from "@nestjs/common";
import { CoursesModule } from "./courses/courses.module";
import { MongooseModule } from "@nestjs/mongoose"
import { MONGO_CONNECT } from "./constants";

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot(MONGO_CONNECT)
  ]
})
export class AppModule {

}
