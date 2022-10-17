import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  constructor(
    private router:Router
  ){

  }


    username:string=''
  

    ngOnInit(): void {
     //   throw new Error('Method not implemented.');
    }

    submit(){     
   this.router.navigate(['/home', this.username])
    }
}