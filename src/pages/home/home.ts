import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists = [
    {
      listName: "Bands",
      listItems: [
        {
          item: "Band 1",
          info: {
            albums: "7"
          }
        },
        {
          item: "American Football",
          info: {
            albums: "4"
          }
        },
        {
          item: "Band 3",
          info: {
            albums: "10"
          }
        },
      ]
    }
  ];

  constructor(public navCtrl: NavController) {
  }


  ionViewDidLoad() {
  }

  itemClicked(item): void {
    console.log(item.info);
  }

}
