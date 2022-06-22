import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Shrimp',
    image: '/assets/images/shrimp.jpg',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'Sear shrimp cook with paprika and butter'
  },
  {
    id: '1',
    name: 'Pho Tron',
    image: '/assets/images/pho.jpg',
    category: 'main',
    featured: true,
    label: '',
    price: '5.99',
    description: 'Pho noodle with stir fry beef, peanut, and herbs along with special sauce'
  },
  {
    id: '2',
    name: 'Tuna',
    image: '/assets/images/tuna.jpg',
    category: 'main',
    featured: true,
    label: '',
    price: '10.99',
    description: 'Medium rare tuna steak with creamy butter and lemon sauce'
  },
  {
    id: '3',
    name: 'Matcha Cake',
    image: '/assets/images/matchaCake.jpg',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'A delectable, soft sponge cake and Matcha cream, with a little bitterness from Chocolate glazing'
  }
] 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish: Dish = DISHES[2];

  constructor() { }

  ngOnInit(): void {
  }

}
