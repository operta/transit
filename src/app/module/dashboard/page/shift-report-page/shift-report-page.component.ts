import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shift-report',
  templateUrl: './shift-report-page.component.html',
  styleUrls: ['./shift-report-page.component.css']
})
export class ShiftReportPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo() {
    this.router.navigateByUrl('/dashboard/tunnel-round/1')
  }


}
