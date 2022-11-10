import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeLowbarComponent } from './poke-lowbar.component';

describe('PokeLowbarComponent', () => {
  let component: PokeLowbarComponent;
  let fixture: ComponentFixture<PokeLowbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeLowbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeLowbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
