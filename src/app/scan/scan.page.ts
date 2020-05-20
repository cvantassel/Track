import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(
    private router: Router,
    private api: ApiService
    ) { }

  ngOnInit() {
  }


  scanSuccessHandler($event) {
    this.api.handleScan($event)
  }
}
