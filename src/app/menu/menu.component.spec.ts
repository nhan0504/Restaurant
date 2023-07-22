import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    const dishServiceStub = {
      getDishes: function(): Observable<Dish[]> {
        return of(DISHES);
      }
    };

    await TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }])
      ],
      declarations: [ MenuComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'baseURL', useValue: baseURL },
      ]
    })
    .compileComponents();

    const dishservice = TestBed.inject(DishService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dishes items should be 4',() => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe('Pho Tron');
    expect(component.dishes[3].featured).toBeFalsy;
  });

  it('should use dishes in the template', () =>{
    fixture.detectChanges();

    // Get access to the DOM
    let de: DebugElement;
    // The element
    let el: HTMLElement;

    // Return all the element that use the tag h1 using the css selector 
    de = fixture.debugElement.query(By.css('h1'));
    // Access to the element selected above
    el = de.nativeElement;

    // Check if it contain a particular value
    expect(el.textContent).toContain(DISHES[0].name.toUpperCase())
  });
});
