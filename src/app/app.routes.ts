import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthguardService } from './Services/authguard.service';
import { canActivated } from './auth.gaurd';


export const routes: Routes = [
    // {path: '', component: HomeComponent},
    {path: '', redirectTo: 'Home' , pathMatch: 'full' },
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Courses', component: CoursesComponent},
    {path: 'Courses', children: [
        {path: 'Course/:id', component: CourseDetailComponent},
        {path: 'Checkout', component: CheckoutComponent, canActivate: [canActivated]}
    ] },
    {path: 'Login', component: LoginComponent},
    {path: '**', component: NotFoundComponent},
];
