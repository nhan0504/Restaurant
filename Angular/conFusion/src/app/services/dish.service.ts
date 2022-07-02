import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { firstValueFrom, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return firstValueFrom(of(DISHES).pipe(delay(2000)));
  }

  getDish(id: string): Promise<Dish> {
    return firstValueFrom(of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)));
  }

  getFeaturedDish(): Promise<Dish> {
    return firstValueFrom(of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)));
  }
  
}
