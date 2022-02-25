import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GitUserDTO } from '../dto/GitUserDTO';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<GitUserDTO>;
  public userName: string;
  public usersMostrados: Array<GitUserDTO>;

  constructor(private _userService: UsersService, private actRout: ActivatedRoute, private _router: Router) {
    this.users = [];
    this.userName = '';
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  borrar(id: number) {
    this.users.splice(this.users.findIndex(el => el.id == id), 1);
    this.usersMostrados.splice(this.users.findIndex(el => el.id == id), 1);
    //this.usersMostrados=this.users;
  }


  buscar(nombreUsu: string = '') {
    if (nombreUsu != '') {
      this.userName = nombreUsu;
    }
    this.cambiaUsuarioMostrados();

  }

  private async obtenerUsuarios() {
    this._userService.obtener().subscribe(data => {
      if (this.userName == '') {
        this.usersMostrados = data;
        return this.users = data;
      }
    })
  }

  cambiaUsuarioMostrados() {
    if(this.userName==''){
      this.usersMostrados=this.users;
    }else{
      this.usersMostrados = this.users.filter(el => {
        if (el.login.startsWith(this.userName) || el.login == this.userName) {
          return true;
        } else {
          return false;
        }

      });
    }

  }

}
