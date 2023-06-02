import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInterface } from './types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AnkDemoService {

  constructor() { }

  getDetails(): Observable<UserInterface[]>{
    return of ([{'id':"hi",'name':"hello there"}])
  }
}
