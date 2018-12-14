import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Items} from "../../interfaces/youtube.interfaces";
import {YoutubeProvider} from "../../providers/youtube/youtube";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: Items[] = [];
  videos: Items[] = [];

  constructor(public navCtrl: NavController, private youtubeProvider: YoutubeProvider, public youtubePlayer: YoutubeVideoPlayer) {
    this.youtubeProvider.fetchCategories()
        .subscribe(data => {
          if (data){
            this.categories = data.items;
          }
        })

      this.searchTrendingVideos()
  }

  public searchTrendingVideos(){
      this.youtubeProvider.searchTrendingVideos()
          .subscribe(data => {
              if (data){
                  this.videos = data.items;
              }
          })
  }

  public searchVideos(categId: number){
      this.youtubeProvider.searchVideos(categId)
          .subscribe(data => {
              if (data){
                  this.videos = data.items;
              }
          })
  }

}
