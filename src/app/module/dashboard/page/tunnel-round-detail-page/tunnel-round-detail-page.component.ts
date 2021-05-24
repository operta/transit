import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tunnel-round-detail-page',
  templateUrl: './tunnel-round-detail-page.component.html',
  styleUrls: ['./tunnel-round-detail-page.component.css']
})
export class TunnelRoundDetailPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo() {
    this.router.navigateByUrl('/dashboard/shift-report');
  }

}
