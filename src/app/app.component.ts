import { Component,
     trigger,
     state,
     transition,
     keyframes,
     animate,
     style,
     group,
   


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
        /*apply group animation*/
        transition("off <=> on",[group([
            animate("3s", style({transform:"translateX(200px)"})),
            animate('2s 2s',style({transform:"translateY(200px)"})),
            animate('2s 2s',style({transform:"translateX(-200px)"})),
            animate('2s 2s',style({transform:"translateY(-200px)"})),
            animate('3s',style({transform:"translateX(600px)",opacity:0}))
 
        	])])
        // transition("off <=> on",[animate('.3s ',style({transform:"rotateX(20deg)"}))]),
         //or 
        
        /* transition("off => on",[animate('.3s ',style({transform:"rotateX(20deg)"}))]),
         transition("on => off",[animate('.3s ',style({transform:"rotateX(-20deg)"}))])*/
  
    	]),
    /*height:(*) it calc the hight automaticly */
    trigger('hieghtToggle',[
       state('normalHieght',style({height:0})),
       state('fullHieght', style({height:'*'})),
       transition("normalHieght<=>fullHieght",[animate('200ms')])
    	]),
    /*leave and enter animatoin [void=>*,*=>void]*/
    // trigger("AnimatoinLeave",[
    //    transition(":enter",[animate("3s",style({ transform:"translateX(50%)"}))]),
    //    transition(":leave",[animate("4s",style({ transform:"translateX(300%)"}))])
  
    // 	])
    /*with keyframes*/
    trigger("AnimatoinLeave",[
    	transition("void => *",[
        style({transform:"translateX(-100%)"}),
      animate(1000,keyframes([
      style({opacity:1  , transform:"translateX(0)"   ,offset:0}),
      style({opacity:0.5, transform:"translateX(50px)",offset:0.7}),
      style({opacity:1  , transform:"translateX(0)"   ,offset:1.0})

      	]))
    		]),
    	transition("*=>void",[
        
      animate(1000,keyframes([
      style({opacity:1  , transform:"translateX(0)"   ,offset:0}),
      style({opacity:0.5, transform:"translateX(50px)",offset:1}),
      style({opacity:1  , transform:"translateX(0)"   ,offset:1.0})

      	]))
    		])
      
 
    	])


  ]
})
export class AppComponent {
	Roomstate: string ="off"
	hieghtState: string="normalHieght"
	VoidState: boolean=true;
  title = 'Angular Animations!';



  togglebulb(){
  	this.Roomstate = (this.Roomstate==="off")?"on":"off"
  }
 toggleHight(){
  this.hieghtState=(this.hieghtState==="normalHieght")?"fullHieght":"normalHieght"
 }
 LeaveAnimatoin(){
 	this.VoidState=this.VoidState?false:true;
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
