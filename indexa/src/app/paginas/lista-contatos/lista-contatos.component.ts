import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';


import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { contato } from '../../componentes/contato/contato';
import { PerfilContatosComponent } from '../perfil-contatos/perfil-contatos.component';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [ContainerComponent, CabecalhoComponent, SeparadorComponent, ContatoComponent, FormsModule, FormularioContatoComponent, RouterLink, PerfilContatosComponent],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: contato[] = []

  constructor(private contatoService: ContatoService){}

  ngOnInit() {
    this.contatoService.obterContatos().subscribe(listaContatos =>{
      this.contatos = listaContatos
    })
  }

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
