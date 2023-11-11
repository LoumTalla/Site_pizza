import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../../shared/pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent implements OnInit {
  @Input() selectedPizza!: Pizza;
  constructor() {}

  ngOnInit(): void {}
}
