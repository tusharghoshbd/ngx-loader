import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ngx-loader',
  templateUrl:'./ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.css']
})
export class NgxLoaderComponent implements OnInit {

    @Input() show = false;
    @Input() fullScreen = true;
    @Input() template:any  ;
    constructor() { }

    ngOnInit() {
        
    }

}