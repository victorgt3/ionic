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

  public usuarios = [];

  public usuarioCadastro = {"_id":"","nome":"", "idade":null};

  constructor (public navCtrl: NavController, private usuarioService:UsuarioService){
   
    this.getUsuario();

  }

  public getUsuario(){
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

  public popularForm(usuario){
    this.usuarioCadastro = usuario;
  }

  public salvarUsuario(){

    if(this.usuarioCadastro._id == ""){
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(response =>this.getUsuario());
    }else{
      this.usuarioService.editar(this.usuarioCadastro).subscribe(response =>this.getUsuario());
    }
    
  }
}
