import { Component,
     trigger,
     state,
     transition,
     keyframes,
     animate,
     style


 } from '@angular/core';
 const shad="rgb(249, 115, 0) 3px 9px 137px, -1px -8px 8px rgb(249, 115, 0)";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("toggle",[
         state('off',style({ backgroundColor:"#fff"})),
         state('on',style({backgroundColor:"#F97300",boxShadow:shad})),
         /*for small code*/
         // transition("off => on,on =>off",[animate('.3s ',style({transform:"rotateX(20deg)"}))]),
         //or 
        
         transition("off <=> on",[animate('.3s ',style({transform:"rotateX(20deg)"}))]),
         //or 
        
        /* transition("off => on",[animate('.3s ',style({transform:"rotateX(20deg)"}))]),
         transition("on => off",[animate('.3s ',style({transform:"rotateX(-20deg)"}))])*/
  
    	])


  ]
})
export class AppComponent {
	Roomstate: string ="off";
  title = 'Angular Animations!';



  togglebulb(){
  	this.Roomstate = (this.Roomstate==="off")?"on":"off"
  }

  /*animation callback*/
  animationStart(event:any){
  	console.log(event.fromState)
  	console.log(event.toState)
  	console.log(event.totalTime)
  	console.log("animatoin Started")
  }
   animationDone(event:any){
  	console.log(event.fromState)
  	console.log(event.toState)
  	console.log(event.totalTime)
  	console.log("animatoin completed")
  }
}
