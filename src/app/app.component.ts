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

  debounce = (func: any, timeout: any) =>{
    let timer: any;
    return (() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this);
      }, timeout);
    })();
  }

  filter = () => {

    this.debounce(
      () => console.log(this.search),
      2000
    )

  }

}
