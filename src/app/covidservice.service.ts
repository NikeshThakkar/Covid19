import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {



  constructor(private httpclient: HttpClient) { }


  countryWiseData() {
    return this.httpclient.get(`https://corona.lmao.ninja/v2/countries`);
  }

  getStatesRecords(): Observable<any> {
    return this.httpclient.get(`https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise`);
  }

  getDistrictwiseRecords(): Observable<any[]> {
    return this.httpclient.get<any[]>(`https://api.covid19india.org/v2/state_district_wise.json`);
  }
}
