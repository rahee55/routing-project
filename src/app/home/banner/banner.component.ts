import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports : [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  router: Router = inject(Router);

  onSearchClicked(value: string){
    this.router.navigate(['/Courses'], {queryParams: {search: value}})
  }
}
