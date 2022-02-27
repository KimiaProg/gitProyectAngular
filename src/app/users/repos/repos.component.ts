import { Component, OnInit } from '@angular/core';
import { RepoDTO } from '../../dto/RepoDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ReposService } from '../../repos.service';
import { GitUserDTO } from 'src/app/dto/GitUserDTO';
import { UsersComponent } from '../users.component';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  public usus:Array<GitUserDTO>=this.parent.getUsers();
  public repos:Array<RepoDTO>;
  public id:number;
  constructor(private actRout: ActivatedRoute, private _repoService:ReposService ,private parent:UsersComponent) {
    this.id= this.actRout.snapshot.params['id'];
   }

  ngOnInit(): void {
   /* var url=this.parent.users.find(el=>el.id==this.id)?.repos_url || '';
    this._repoService.obtener(url).subscribe(data => {
         this.repos.push(new RepoDTO(data.id,data.name,data.visibility,data.language,data.allow_forking,data.created_at,data.updated_at,data.html_url));
      }
    );*/
  }

}
