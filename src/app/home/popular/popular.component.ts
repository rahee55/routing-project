import { Component, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular',
  imports: [CommonModule, RouterLink],
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  router: Router = inject(Router)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  onCourses(){
    // this.router.navigate(['Courses'], {relativeTo: this.activeRoute});
    this.router.navigateByUrl('courses')
  }
}
