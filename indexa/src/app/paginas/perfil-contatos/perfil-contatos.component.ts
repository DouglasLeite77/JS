import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contatos',
  standalone: true,
  imports: [ContainerComponent, CommonModule],
  templateUrl: './perfil-contatos.component.html',
  styleUrl: './perfil-contatos.component.css'
})
export class PerfilContatosComponent {

  contato: contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }
}
