import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  public pizzas$: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([
    {
      name: '4 tomate',
      img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
      desc: 'La pizza avec beaucoup de, pimant et de leguime',
    },
    {
      name: 'Mex',
      img: 'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
      desc: 'Avec des viandes et de formance pimant',
    },

    {
      name: 'magineta',
      img: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
      desc: 'Tout légumes, pas de viande Avec des viandes et de formance pimant.',
    },
  ]);

  public PizzaSelected$: BehaviorSubject<Pizza> = new BehaviorSubject(
    this.pizzas$.value[0]
  );

  public recupPizza(index: number): void {
    this.PizzaSelected$.next(this.pizzas$.value[index]);
  }

  constructor() {}
}
