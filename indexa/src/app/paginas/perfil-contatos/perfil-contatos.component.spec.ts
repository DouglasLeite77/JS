import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContatosComponent } from './perfil-contatos.component';

describe('PerfilContatosComponent', () => {
  let component: PerfilContatosComponent;
  let fixture: ComponentFixture<PerfilContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilContatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
