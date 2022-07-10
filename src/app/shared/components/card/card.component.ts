import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() cardSimple: boolean = false;
  @Input() infoSimple: { title: string, total: number }= {
    title: '',
    total: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
