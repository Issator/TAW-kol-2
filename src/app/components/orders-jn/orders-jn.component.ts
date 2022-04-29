import { Component, OnInit } from '@angular/core';
import {JNDataService} from "../../jn-data.service";

@Component({
  selector: 'orders-jn',
  templateUrl: './orders-jn.component.html',
  styleUrls: ['./orders-jn.component.css']
})
export class OrdersJNComponent implements OnInit {

  public items$: any;

  constructor(private service: JNDataService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
