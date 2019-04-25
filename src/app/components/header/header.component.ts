import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  isCollapsed: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
