import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePokemonComponent } from './picture-pokemon.component';

describe('PicturePokemonComponent', () => {
  let component: PicturePokemonComponent;
  let fixture: ComponentFixture<PicturePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicturePokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicturePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
