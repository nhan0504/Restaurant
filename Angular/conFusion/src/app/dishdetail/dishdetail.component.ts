import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comment';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish!: Dish | null;
  dishcopy!: Dish | null;
  errMess!: string;
  dishIds!: string[];
  prev!: string;
  next!: string;
  @ViewChild('cform') commentFormDirective: any;
  comment!: Comment;
  commentForm!: FormGroup;

  formErrors = {
    'author': '',
    'comment': '' 
  };

  validationMessages = {
    'author': {
      'required': 'Name is required',
      'minlength': 'Name must be at least 2 characters long'
    }, 
    'comment': {
      'required': 'Comment is required'
    }
  };

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('baseURL') public baseURL: string) { }

  ngOnInit(): void {
    // Create comment form
    this.createForm();

    this.dishService.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
    let id = this.route.params
      .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe({
        next: dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); },
        error: errMess => this.errMess = <any>errMess
      });
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [ Validators.required, Validators.minLength(2)] ],
      rating: 5,   
      comment: ['', Validators.required ]     
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data? : any) {
    if (!this.commentForm) { return; }
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field as keyof typeof this.formErrors] = '';
        const control = this.commentForm.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages['author'];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field as keyof typeof this.formErrors] += messages[key as keyof typeof messages] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    if (this.dish != null && this.dishcopy != null) {
      this.dishcopy.comments.push(this.comment);
      this.dishService.putDish(this.dishcopy)
      .subscribe({
        next: dish => { this.dish = dish; this.dishcopy = dish; },
        error: errMess => { this.dish = null, this.dishcopy = null, this.errMess = <any>this.errMess}
      })
    }
    
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });

    this.commentFormDirective.resetForm();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
