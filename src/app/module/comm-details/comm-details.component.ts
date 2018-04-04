import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {mainservice} from '../services/mainservice';



@Component({
  selector: 'app-comm-details',
  templateUrl: './comm-details.component.html',
  styleUrls: ['./comm-details.component.css'],
  //template: `<app-causeslist (click)="app-causeslist.myid(i.id)"></app-causeslist>`,
})
export class CommDetailsComponent implements OnInit {
  prod:Array<any>;
   valueAtIndex1;
  constructor(private __ActivatedRoute:ActivatedRoute,private __mainservice:mainservice) { 

  this.prod=__mainservice.getProductList();

  }

  ngOnInit() {
    this.__ActivatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
      
      this.valueAtIndex1 = this.prod[userId-1];
      console.log(this.valueAtIndex1);
    });
  }

}
