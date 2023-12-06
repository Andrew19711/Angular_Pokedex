import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPokComponent } from './photo-pok.component';

describe('PhotoPokComponent', () => {
  let component: PhotoPokComponent;
  let fixture: ComponentFixture<PhotoPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoPokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
