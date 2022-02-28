import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetalisComponent } from './item-detalis.component';

describe('ItemDetalisComponent', () => {
  let component: ItemDetalisComponent;
  let fixture: ComponentFixture<ItemDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
