import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;

  searchString!: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.searchString = String(this.activeRoute.snapshot.queryParamMap.get('search'));

    if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
      this.AllCourses = this.coursesService.courses
    }
    else{
      this.AllCourses = this.coursesService.courses.filter(
        x => x.title.toLowerCase().includes(this.searchString.toLowerCase())
      )
    }
  }

}
