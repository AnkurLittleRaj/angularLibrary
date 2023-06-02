import { Component, inject, OnInit } from '@angular/core';
import { AnkDemoService } from 'ank-demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularLibrary';
 userService = inject(AnkDemoService)
  ngOnInit(): void {
//     this.userService.getDetails().subscribe((res:any)=>{
// console.log(res);
//     })
this.userService.getDetails().subscribe((res:any)=>{
   console.log(res);
})
  }
}
