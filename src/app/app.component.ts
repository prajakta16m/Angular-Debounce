import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myproject';

  input = "sample";
  search = "";
  list : String[] = [];

  add(){
    console.log(this.input);
    
    if(this.input == null || this.input.length == 0) return;
    // check for duplicates
 
    let includes = false;
    this.list.forEach( str => {
      if(str.toLowerCase() == this.input.toLocaleLowerCase()){
        // match found - dont add
        includes = true;
      }
    });

    if(!includes){
      this.list.push(this.input);
     
    }
    this.input = "";
  }

  delete(idx: number) {
   
    this.list.splice(idx,1);
    
  }

  /*
  * In the debouncing technique, no matter how many times the user fires the event, 
  * the attached function will be executed only after the specified time once the user stops firing the event.
  */
  debounce = (func: any, timeout: any) =>{
    let timer: any;
    return (() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this);
      }, timeout);
    })();
  }

  /*
  * Throttling is a technique in which, no matter how many times the user fires the event, 
  * the attached function will be executed only once in a given time interval.
  */
  throttle = (func: any, delay: any) => {
    let prev = 0;
    return () => {
      let now = new Date().getTime();
      console.log(prev,now,delay);
      if((now - prev) > delay) {
        prev = now;
       func.apply();
      }
    }
  }

  filter = () => {

    this.throttle(
      () => console.log(this.search),
      2000
    )

  }

}
