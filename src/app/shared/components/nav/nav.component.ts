import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  public links = [
    {
      title: 'Cats',
      path: '',
      icon: 'assets/svg/cat.svg'
    },
    {
      title: 'Aliens',
      path: '/players',
      icon: 'assets/svg/alien.svg'
    },
    {
      title: 'Space',
      path: '/auth/login',
      icon: 'assets/svg/space.svg'
    },
    {
      title: 'Shuttle',
      path: '/auth/register',
      icon: 'assets/svg/shuttle.svg'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

}
