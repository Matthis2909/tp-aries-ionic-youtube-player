import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Items} from "../../interfaces/youtube.interfaces";
import {YoutubeProvider} from "../../providers/youtube/youtube";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: Items[] = [];

  constructor(public navCtrl: NavController, private youtubeProvider: YoutubeProvider) {
    this.youtubeProvider.fetchCategories()
        .subscribe(data => {
          if (data){
            this.categories = data.items;
          }
        })
  }

}
