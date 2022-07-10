import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public links = [
    {
      title: 'Home', 
      link: '/',
      icon: 'assets/svg/cat.svg'
    },
    {
      title: 'About',
      link: '/players',
      icon: 'assets/svg/alien.svg'
    },
    {
      title: 'Contact',
      link: '/',
      icon: 'assets/svg/planet.svg'
    },
    {
      title: 'Login',
      link: '/auth',
      icon: 'assets/svg/shuttle.svg'
    }
  ]

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
