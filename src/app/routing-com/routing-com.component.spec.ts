import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComComponent } from './routing-com.component';

describe('RoutingComComponent', () => {
  let component: RoutingComComponent;
  let fixture: ComponentFixture<RoutingComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
