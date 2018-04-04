import {Injectable} from '@angular/core';

import {RequestOptions, Headers,Http} from '@angular/http';

import {Observable} from 'rxjs';

import 'rxjs/Rx'


@Injectable()


export class mainservice{
    myproduct_list:Array<any>;
    //url:string;

    constructor(private httpSVC:Http){

    }


    getProductList(){
        this.myproduct_list=[

            {id:1,image:'http://via.placeholder.com/800x600',description:'first one',price:1000},
            {id:2,image:'http://via.placeholder.com/800x600',description:'first two',price:2000},
            {id:3,image:'http://via.placeholder.com/800x600',description:'first three',price:3000}
      
        ];
      
      
        return this.myproduct_list;
    }


    // getusers(){
    //     url='';

    //     return this.https.get(url).map(response => {
    //               return response.json();
    //     })
    // }


    getusers(){
        let url2='http://realestateforyou.in/rc_api/index.php/ApiController/getAgentsList/getAgentsList';
        // let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        // let options = new RequestOptions({ headers: headers });
        return this.httpSVC.get(url2).map(response=>{

            console.log(response);
            return response.json();
        })
    }



}



