import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PopularComponent } from './popular/popular.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
    selector: 'app-home',
    imports: [BannerComponent, PopularComponent, TestimonyComponent, ServicesComponent, ContactUsComponent],
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{

}