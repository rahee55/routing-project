import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './Services/user.service';
import { CourseService } from './Services/course.service';
import { ServicesService } from './Services/services.service';


@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService, CourseService, ServicesService]
})
export class AppComponent {
  title = 'angular-routing';
}
