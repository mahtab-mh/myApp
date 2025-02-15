import { Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { RouterOutlet } from '@angular/router';
import { postResponsModel } from '../../app.model';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../layouts/navbar-layout';

@Component({
    selector: 'homeComponent',
    templateUrl: 'home.component.html',
    imports: [RouterOutlet,JsonPipe,ButtonModule,NavbarComponent],
    providers: [AppService]
})

export class mainPageComponent implements OnInit {
 appService=inject(AppService)
  title = 'angular-app';
  postBlog!:postResponsModel[] 
   
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.appService.getPosts().subscribe({
      next:((data)=>{
        this.postBlog=data as postResponsModel[]  

      }),
      error:((error)=>{
       debugger
      }),
      complete:(()=>{
        debugger
      })
    }
    )
  }
  

}
