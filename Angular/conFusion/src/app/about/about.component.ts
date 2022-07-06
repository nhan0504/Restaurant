import { Component, Inject, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders!: Leader[];
  errMess!: string;
  constructor(private leaderService: LeaderService,
    @Inject('baseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
      .subscribe({
        next: (leaders) => this.leaders = leaders,
        error: errMess => this.errMess = errMess
      });
  }

}
