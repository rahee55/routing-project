import { Component, inject } from '@angular/core';
import { ServicesService } from './../../Services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports:[CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesService = inject(ServicesService);
    services: {title: string, image: string, description: string}[] = [];

    ngOnInit(){
        this.services = this.servicesService.services;
  }
}
