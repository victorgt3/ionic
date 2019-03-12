import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../usuario.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UsuarioService]
})
export class HomePage {

  public usuario = [];

  public usuarioCadastro = {"nome":"", "idade":null};

  constructor (public navCtrl: NavController, private usuarioService:UsuarioService){
   
    this.getUsuario();

  }

  public getUsuario(){
    this.usuarioService.findAll().subscribe(response => this.usuario = response);
  }

  public salvarUsuario(){
    this.usuarioService.salvar(this.usuarioCadastro).subscribe(response =>this.getUsuario());
  }
}
