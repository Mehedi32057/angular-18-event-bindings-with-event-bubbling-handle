import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-event-bindings';

  //event bubling means when i click any event it click parent event 
  //this name event bubbling
  //in angular event bindings means when we want to click means action click when i click something is happend its call the event bindings
  //this binding complete by just take click action and then just call its on ts file then its dynamically working
  number=1;

  onClick(e:any){
    e.stopPropagation()
    this.number++;

    // console.log("show button,e") }
}
onDivclick(){

  console.log("div click 1")
}

onDivclick1(){
console.log("div click 2")

}


}