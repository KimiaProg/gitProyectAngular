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

  }

   private async obtenerUsus() {
    var service= this._userService.obtener();
     var usus:Array<GitUserDTO>= await lastValueFrom(service);
     this.setRepos(usus);
    }


   setRepos(usus: Array<GitUserDTO>) {
    var url = usus.find(el => el.id == this.id)?.repos_url || '';
    this._repoService.obtener(url).subscribe(data => {
      console.log(data);
      data.forEach((el: RepoDTO ) => {
        this.repos.push(new RepoDTO(el.id, el.name, el.visibility, el.language, el.allow_forking, el.created_at, el.updated_at, el.html_url));
      });
    });
  }

}
