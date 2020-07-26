import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatTableDataSource,
} from '@angular/material';
import { CovidserviceService } from '../covidservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citydata',
  templateUrl: './citydata.component.html',
  styleUrls: ['./citydata.component.scss'],
})
export class CitydataComponent implements OnInit {
  city: Observable<any[]>;
  citydata: any;
  cityRecords = new MatTableDataSource<any>(this.citydata);
  Columns: string[] = ['district', 'confirm', 'active', 'recoverd', 'deceased'];
  dummy: any;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<CitydataComponent>,
    private serviceData: CovidserviceService
  ) {}

  ngOnInit() {
    this.DistrictRecords();
  }

  DistrictRecords() {
    console.log(this.data.data);
    this.serviceData.getDistrictwiseRecords().subscribe((Records: any) => {
      if (this.data.data === Records[0].state) {
        this.cityRecords = Records[0].districtData;
      } else if (this.data.data === Records[1].state) {
        this.cityRecords = Records[1].districtData;
      } else if (this.data.data === Records[2].state) {
        this.cityRecords = Records[2].districtData;
      } else if (this.data.data === Records[3].state) {
        this.cityRecords = Records[3].districtData;
      } else if (this.data.data === Records[4].state) {
        this.cityRecords = Records[4].districtData;
      } else if (this.data.data === Records[5].state) {
        this.cityRecords = Records[5].districtData;
      } else if (this.data.data === Records[6].state) {
        this.cityRecords = Records[6].districtData;
      } else if (this.data.data === Records[7].state) {
        this.cityRecords = Records[7].districtData;
      } else if (this.data.data === Records[8].state) {
        this.cityRecords = Records[8].districtData;
      } else if (this.data.data === Records[9].state) {
        this.cityRecords = Records[9].districtData;
      } else if (this.data.data === Records[10].state) {
        this.cityRecords = Records[10].districtData;
      } else if (this.data.data === Records[11].state) {
        this.cityRecords = Records[11].districtData;
      } else if (this.data.data === Records[12].state) {
        this.cityRecords = Records[12].districtData;
      } else if (this.data.data === Records[13].state) {
        this.cityRecords = Records[13].districtData;
      } else if (this.data.data === Records[14].state) {
        this.cityRecords = Records[14].districtData;
      } else if (this.data.data === Records[15].state) {
        this.cityRecords = Records[15].districtData;
      } else if (this.data.data === Records[16].state) {
        this.cityRecords = Records[16].districtData;
      } else if (this.data.data === Records[17].state) {
        this.cityRecords = Records[17].districtData;
      } else if (this.data.data === Records[18].state) {
        this.cityRecords = Records[18].districtData;
      } else if (this.data.data === Records[19].state) {
        this.cityRecords = Records[19].districtData;
      } else if (this.data.data === Records[20].state) {
        this.cityRecords = Records[20].districtData;
      } else if (this.data.data === Records[21].state) {
        this.cityRecords = Records[21].districtData;
      } else if (this.data.data === Records[22].state) {
        this.cityRecords = Records[22].districtData;
      } else if (this.data.data === Records[23].state) {
        this.cityRecords = Records[23].districtData;
      } else if (this.data.data === Records[24].state) {
        this.cityRecords = Records[24].districtData;
      } else if (this.data.data === Records[25].state) {
        this.cityRecords = Records[25].districtData;
      } else if (this.data.data === Records[26].state) {
        this.cityRecords = Records[26].districtData;
      } else if (this.data.data === Records[27].state) {
        this.cityRecords = Records[27].districtData;
      } else if (this.data.data === Records[28].state) {
        this.cityRecords = Records[28].districtData;
      } else if (this.data.data === Records[29].state) {
        this.cityRecords = Records[29].districtData;
      } else if (this.data.data === Records[30].state) {
        this.cityRecords = Records[30].districtData;
      } else if (this.data.data === Records[31].state) {
        this.cityRecords = Records[31].districtData;
      } else if (this.data.data === Records[32].state) {
        this.cityRecords = Records[32].districtData;
      } else if (this.data.data === Records[33].state) {
        this.cityRecords = Records[33].districtData;
      } else if (this.data.data === Records[34].state) {
        this.cityRecords = Records[34].districtData;
      } else if (this.data.data === Records[35].state) {
        this.cityRecords = Records[35].districtData;
      } else if (this.data.data === Records[35].state) {
        this.cityRecords = Records[36].districtData;
      } else {
      }
    });
  }

  close(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
