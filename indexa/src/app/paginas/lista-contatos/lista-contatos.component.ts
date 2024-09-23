import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

interface contato{
  id: number;
  nome: string;
  telefone: string
}

import agenda from '../../agenda.json'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [ContainerComponent, CabecalhoComponent, SeparadorComponent, ContatoComponent, FormsModule, FormularioContatoComponent, RouterLink],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: contato[] = agenda

  filtroPorTexto: string = ""

  filtrarContatoPorTexto(): contato[] {
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatoPorLetra(letra: string): contato[]{
    return this.filtrarContatoPorTexto().filter(contato => {
      return contato.nome.toLocaleLowerCase().startsWith(letra)
    })
  }
}
