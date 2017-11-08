import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists:any = [
    {
      listName: "Bands",
      listItems: [
        {
          item: "The Foxing",
          info: {
            albums: "3"
          }
        },
        {
          item: "American Football",
          info: {
            albums: "2"
          }
        },
      ]
    },
    {
      listName: "Cats",
      listItems: [
        {
          item: "Russian blue",
          info: {
            furColor: "grey"
          }
        },
        {
          item: "Tabby",
          info: {
            furColor: "mixed"
          }
        },
      ]
    },
  ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
