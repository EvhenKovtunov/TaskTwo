import {Injectable} from "@angular/core";
import {Settings} from "../model/Settings.model";
import {Http,Response} from "@angular/http";
import { Observable} from "rxjs/Observable"
import {HttpClient} from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable()
export class PageSettingsService{

    constructor( private _http:Http/*private http: HttpClient*/){}

    getPageSettings():Observable<Settings>{
        return this._http.get("../assets/data/test.json")
        .map(resp=>resp.json());
    }
   /* getData(){
        return this.http.get('../assets/data/test.json');
    }*/

  
}
