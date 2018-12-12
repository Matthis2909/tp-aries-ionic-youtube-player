import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {YoutubeAPIRequest} from "../../interfaces/youtube.interfaces";
import {map} from "rxjs/operators";

const API_KEY = 'AIzaSyBeIbavJ_ZXTAh85p5GQ4BH8REKPnaY_q0';
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

}
