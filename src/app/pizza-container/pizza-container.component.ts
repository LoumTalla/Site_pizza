import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { PizzaService } from '../shared/services/pizza.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.css'],
})
export class PizzaContainerComponent implements OnInit, OnDestroy {
  public pizzas!: Pizza[];
  public PizzaSelected!: Pizza;

  public Subscription: Subscription = new Subscription();

  constructor(private pizzaservice: PizzaService) {}

  ngOnInit(): void {
    this.Subscription.add(
      this.pizzaservice.pizzas$.subscribe((pizzas: Pizza[]) => {
        this.pizzas = pizzas;
      })
    );
    this.Subscription.add(
      this.pizzaservice.PizzaSelected$.subscribe((PizzaSelected: Pizza) => {
        this.PizzaSelected = PizzaSelected;
      })
    );
  }

  public recupPizza(index: number): void {
    this.pizzaservice.recupPizza(index);
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
