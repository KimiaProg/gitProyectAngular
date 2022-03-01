export class RepoDTO {
  constructor(public id: number,
    public name: string,
    public visibility: string,
    public language: string,
    public allow_forking: boolean,
    public created_at: string,
    public updated_at: string,
    public html_url: string,) {

  }

}
