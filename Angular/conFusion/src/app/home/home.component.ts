import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  dishErrMess!: string;
  promotion!: Promotion;
  promoErrMess!: string;
  leader!: Leader;
  leaderErrMess!: string;

  constructor(private dishService: DishService, 
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('baseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
      .subscribe({
        next: (dish) => this.dish = dish,
        error: errMess => this.dishErrMess = <any>errMess
      });
    this.promotionService.getFeaturedPromotion()
      .subscribe({
        next: (promotion) => this.promotion = promotion,
        error: errMess => this.promoErrMess = <any>errMess
      });
    this.leaderService.getFeaturedLeader()
      .subscribe({
        next: (leader) => this.leader = this.leader = leader,
        error: errMess => this.leaderErrMess = errMess
      });
  }

}
