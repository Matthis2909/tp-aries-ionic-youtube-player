import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {YoutubeAPIRequest} from "../../interfaces/youtube.interfaces";
import {map} from "rxjs/operators";

const API_KEY = 'CLE_API';
const API_URL = 'https://www.googleapis.com/youtube/v3';
const REGION_CODE = 'FR';

@Injectable()
export class YoutubeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello YoutubeProvider Provider');
  }

  public fetchCategories(): Observable<YoutubeAPIRequest> {
    return this.http
        .get(API_URL + '/videoCategories?part=snippet&regionCode=' + REGION_CODE + '&key=' + API_KEY)
        .pipe(
            map((response : YoutubeAPIRequest) => {return response;})
        )
  }

  public searchTrendingVideos(): Observable<YoutubeAPIRequest> {
    return this.http
        .get(API_URL + '/videos?part=snippet&chart=mostPopular&key=' + API_KEY + '&regionCode=' + REGION_CODE + '&maxResults=10')
        .pipe(
            map((response : YoutubeAPIRequest) => {return response;})
        )
  }

  public searchVideos(categId: number = 1): Observable<YoutubeAPIRequest> {
    return this.http
        .get(API_URL + '/search?part=snippet&videoCategoryId=' + categId + '&key=' + API_KEY + '&maxResults=10&type=video&regionCode=' + REGION_CODE)
        .pipe(
            map((response: YoutubeAPIRequest) => {return response;})
        )
  }



}
