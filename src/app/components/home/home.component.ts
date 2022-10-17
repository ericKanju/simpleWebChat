import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, fromEvent, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  
  username:any;
  message:string='';
  messageArray:any[]=[];
  id:any;
  date:any = new Date();

	destroy = new Subject();
	
    	destroy$ = this.destroy.asObservable();
      
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    this.username = this.route.snapshot.paramMap.get('username');
    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
			.subscribe((e: Event) => console.log(this.getYPosition(e)));
  }

  getYPosition(e:Event): number {
    return (e.target as Element).scrollTop;
 }

    ngOnInit(){
      var arr = JSON.parse(localStorage.getItem('messageArray')!)

      this.messageArray = arr.slice(Math.max(arr.length - 25, 1))

      this.id = setInterval(() => {
        arr = JSON.parse(localStorage.getItem('messageArray')!)
       this.messageArray = arr.slice(Math.max(arr.length - 25, 1));
      }, 50);

    }
    

    loading(){
      this.messageArray = JSON.parse(localStorage.getItem('messageArray')!)
      console.log(this.messageArray.length)
    }

    submit(){
      this.date = new Date();
      this.messageArray.push({username:this.username,message:this.message,date:this.date})
      localStorage.setItem('messageArray',JSON.stringify(this.messageArray));
      this.message=''
    }

}