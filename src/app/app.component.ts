import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { InterceptorService } from './common/interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor ( private service : InterceptorService){}
  
  ngOnInit(): void{
    this.service.getData()
  }
}
