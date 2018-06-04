import {Injectable} from "@angular/core";
import {Settings} from "../model/Settings.model";
import {Http,Response} from "@angular/http";
import { Observable} from "rxjs/Observable"
import "rxjs/add/operator/map";

@Injectable()
export class SettingsService{

    constructor( private _http:Http){}

    getPageSettings():Observable<Settings[]>{
        return this._http.get("assets/data/test.json")
        .map(resp=>resp.json());
      
    }
}
