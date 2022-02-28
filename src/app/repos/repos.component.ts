import { Component, Input, OnInit } from '@angular/core';
import { RepoDTO } from '../dto/RepoDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ReposService } from '../repos.service';
import { GitUserDTO } from 'src/app/dto/GitUserDTO';
import { UsersService } from '../users.service';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';



@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public users: Array<GitUserDTO>;
  public repos: Array<RepoDTO>;
  public id: number;
  constructor(private _userService: UsersService, private actRout: ActivatedRoute, private _repoService: ReposService) {
    this.users = [];
    this.repos = [];
    this.id = this.actRout.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.obtenerUsus();
    this.setRepos();

  }

   private async obtenerUsus() {
    var service= this._userService.obtener();

     const lastUsers= await lastValueFrom(service);

     /*lastUsers.subscribe(data => {
      return this.users = data;
    })*/
  }


  async setRepos() {
    var url = this.users.find(el => el.id == this.id)?.repos_url || '';
    this._repoService.obtener(url).subscribe(data => {
      console.log(data);
      //this.repos.push(new RepoDTO(data.id, data.name, data.visibility, data.language, data.allow_forking, data.created_at, data.updated_at, data.html_url));
    });
  }

}
