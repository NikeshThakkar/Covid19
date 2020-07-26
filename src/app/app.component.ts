import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from './covidservice.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatBottomSheet } from '@angular/material';
import { CitydataComponent } from './citydata/citydata.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerType = 'square-jelly-box';
  checked: boolean;
  states: Observable<any[]>;
  statedetails: any;
  statecharts: any ;
  totalRecords: any;
  Columns: string[] = ['State', 'Confirm', 'Active', 'Recoverd', 'Deaths'];
  dataSource = new MatTableDataSource<any>(this.statedetails);
  datatable = [];
  chart = {
    ColumnChart: 'ColumnChart',
    PieChart: 'PieChart',
    height: 500,
    options: {
      animation: {
        duration: 1000,
        easing: 'out',
      },
      is3D: true,
    }

  };

  constructor(private serviceData: CovidserviceService,
              private bottomSheet: MatBottomSheet,
              private spinner: NgxSpinnerService,
             ) {}

 ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    this.State();
    this.Records();
    this.initChart('c');

  }

    State() {
      this.states = this.serviceData.getStatesRecords();
      this.states.subscribe((details: any) => {
        this.dataSource = details.data.statewise;
        console.log(this.dataSource);
      });
    }

    Records() {
      this.serviceData.getStatesRecords().subscribe((Records: any)  =>  {
          this.totalRecords = Records.data.total;
          console.log(this.totalRecords);
        });
    }



    updateChart(e: HTMLInputElement) {
        console.log(e.value);
        this.checked = false;
        this.initChart(e.value);

    }

    openCityDialog(event) {

      const bottomSheetRef = this.bottomSheet.open(CitydataComponent, {
        data: { data: event },
      });
    }

    initChart(casetype: string) {

      this.checked = true;
      this.states = this.serviceData.getStatesRecords();
      this.states.subscribe((details: any) => {
      this.statecharts = details.data.statewise;
      this.datatable = [];
      this.statecharts.forEach(cs => {

          let value: number;
          if (casetype === 'c') {
              value = cs.confirmed;
              this.datatable.push([cs.state, value]);
          }
          if (casetype === 'a') {
            value = cs.active;
            this.datatable.push([cs.state, value]);
          }
          if (casetype === 'r') {
              value = cs.recovered;
              this.datatable.push([cs.state, value]);
          }
          if (casetype === 'd')  {
              value = cs.deaths;
              this.datatable.push([cs.state, value]);
          }

       });
      });

    }

}
