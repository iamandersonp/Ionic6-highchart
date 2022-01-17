import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: false })
  container: ElementRef<HTMLDivElement>;
  chart: Highcharts.Chart;
  stack: Highcharts.OptionsStackingValue = undefined;
  chartType = 'bar';
  highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: this.chartType,
    },
    title: {
      text: '',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: this.stack,
      },
    },
    series: [
      {
        data: [10, 3],
        type: undefined,
      },
      {
        data: [100, 3],
        type: undefined,
      },
    ],
  };

  constructor() {}

  ngAfterViewInit(): void {}

  setChart(chart: Highcharts.Chart) {
    this.chart = chart;
  }

  ngOnInit() {}
}
