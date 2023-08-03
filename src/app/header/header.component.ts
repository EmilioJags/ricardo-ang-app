import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  links = [
    {
      id: 'home',
      counter: 0,
      className: 'active',
      active: true,
      text: 'Home',
      ref: '/home',
    },
    {
      id: 'cc',
      counter: 1,
      className: 'inactive',
      active: false,
      text: 'Code Challenges',
      ref: '/code-challenges',
    },
    {
      id: 'dd',
      counter: 2,
      className: 'inactive',
      active: false,
      text: 'Drag and Drop example',
      ref: '/drag-drop',
    },
    {
      id: 'gifts',
      counter: 3,
      className: 'inactive',
      active: false,
      text: 'Regalos Casita',
      ref: '/gift-list',
    },
  ];

  ngOnInit() {}

  updateSelected(event: any) { 
    //event.active = !event.active;
  }
}
