import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestResponseComponent } from './http-request-response.component';

describe('HttpRequestResponseComponent', () => {
  let component: HttpRequestResponseComponent;
  let fixture: ComponentFixture<HttpRequestResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRequestResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpRequestResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
