import { Component, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
}
