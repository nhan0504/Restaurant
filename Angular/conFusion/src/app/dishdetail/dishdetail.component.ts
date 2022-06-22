import { Component, OnInit } from '@angular/core';

const DISH = {
  id: '3',
  name: 'Tuna',
  image: '/assets/images/tuna.jpg',
  category: 'mains',
  featured: true,
  label: '',
  price: '10.99',
  // tslint:disable-next-line:max-line-length
  description: 'Medium rare tuna steak with creamy butter and lemon sauce',
  comments: [
       {
           rating: 5,
           comment: 'There is no way you can resist it',
           author: 'Chip',
           date: '2022-6-22T15:01:28.556094Z'
       },
       {
           rating: 4,
           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
           author: 'Paul McVites',
           date: '2014-09-05T17:57:28.556094Z'
       },
       {
           rating: 4,
           comment: 'Eat it, just eat it!',
           author: 'Michael Jaikishan',
           date: '2015-02-13T17:57:28.556094Z'
       },
       {
           rating: 4,
           comment: 'Ultimate, Reaching for the stars!',
           author: 'Ringo Starry',
           date: '2013-12-02T17:57:28.556094Z'
       },
       {
           rating: 3,
           comment: 'It\'s your birthday, we\'re gonna party!',
           author: '25 Cent',
           date: '2011-12-02T17:57:28.556094Z'
       }
   ]
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish = DISH;
  
  constructor() { }

  ngOnInit(): void {
  }

}
