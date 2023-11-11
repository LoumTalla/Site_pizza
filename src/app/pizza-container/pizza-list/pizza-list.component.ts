import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../shared/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent {
  @Input() pizzas?: Pizza[];
  @Input() PizzaSelected!: Pizza;
  @Output() private changePizza: EventEmitter<number> =
    new EventEmitter<number>();

  public recupPizza(index: number): void {
    this.changePizza.emit(index);
  }
}
