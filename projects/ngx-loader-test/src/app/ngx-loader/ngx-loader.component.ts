import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ngx-loader',
  templateUrl:'./ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.css']
})
export class NgxLoaderComponent implements OnInit {

    @Input('show') show = false;
    @Input()  fullScreen = false;
    constructor() { }

    ngOnInit() {
        
    }

}
