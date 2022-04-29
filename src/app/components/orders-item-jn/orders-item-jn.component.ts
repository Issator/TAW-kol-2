import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'orders-item-jn',
  templateUrl: './orders-item-jn.component.html',
  styleUrls: ['./orders-item-jn.component.css']
})
export class OrdersItemJNComponent implements OnInit {

  @Input() title ?: string;
  @Input() id ?: string;
  @Input() image ?: string;
  @Input() text ?: string

  constructor() { }

  ngOnInit(): void {
  }

}
