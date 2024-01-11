import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoHumanoComponent } from './cuerpo-humano.component';

describe('CuerpoHumanoComponent', () => {
  let component: CuerpoHumanoComponent;
  let fixture: ComponentFixture<CuerpoHumanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoHumanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
