import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public avgChamp: any[] = [
    {
      total: 10,
      title: 'Tournaments'
    },
    {
      total: 124,
      title: 'Games'
    },
    {
      total: 12,
      title : 'Players'
    },
    {
      total: 425,
      title: 'Goals'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
