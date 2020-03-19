import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show = false;
  fullScreen = true;
  template = ``

  onClickDefault(){
    this.show = true;
    this.fullScreen = true;
    this.template = ``
    setTimeout(() => {
        this.show = false
    }, 2000);
  }
  onClickInsideContainer(){
    this.show = true;
    this.fullScreen = false;
    this.template = ``
    setTimeout(() => {
        this.show = false
    }, 2000);
  }

  onClickCustomTemplate(){
    this.show = true;
    this.fullScreen = false;
    this.template = `<div class="loader loader-2">
            <span></span>
            <span></span>
            <span></span>
        </div>`
    setTimeout(() => {
        this.show = false
    }, 3000);
  }
}
