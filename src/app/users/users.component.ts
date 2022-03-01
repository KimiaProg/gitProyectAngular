import { Component,  OnInit } from '@angular/core';
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
  public id:number;

  constructor(private _userService: UsersService, private actRout: ActivatedRoute, private _router: Router) {
    this.users = [];
    this.userName = '';
    this.id= this.actRout.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  borrar(id: number) {
    this.users.splice(this.users.findIndex(el => el.id == id), 1);
    this.usersMostrados.splice(this.usersMostrados.findIndex(el => el.id == id), 1);
  }


  buscar() {
    this.cambiaUsuarioMostrados();
  }

  private obtenerUsuarios() {
    this._userService.obtener().subscribe(data => {
        this.usersMostrados = data;
        return this.users = data;
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

  onBack(){
    this._router.navigate(['/gitUsers/']);

  }


}
