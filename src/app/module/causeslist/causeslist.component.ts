import { Component, OnInit } from '@angular/core';
import {mainservice} from '../services/mainservice';

@Component({
  selector: 'app-causeslist',
  templateUrl: './causeslist.component.html',
  styleUrls: ['./causeslist.component.css']
})
export class CauseslistComponent implements OnInit {

  myproduct_list2=[];

  getallusers:any;

  constructor(private _mainservice:mainservice) {

        this.myproduct_list2=_mainservice.getProductList();


        this._mainservice.getusers().subscribe(result=>{

          this.getallusers=result;
          
          
        })
   }

  ngOnInit() {
  }

  myid(r){
    alert(r);
  }



   


}
