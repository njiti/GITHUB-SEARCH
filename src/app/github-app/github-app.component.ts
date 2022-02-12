import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos: any[] | undefined;
  public errorMessage: string | undefined;


  constructor(private githubService:GithubService) { }

  public searchUser(){
    //get github profile
    this.githubService.getProfile().subscribe(next()=>{
      this:githubprofile = data,
    }, error, (error: string) => {
      this.errorMessage = error;
    });

    //get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe(next: (data) => {
      this.githubRepos = data;
    },error, (error: string) => {
      this.errorMessage = error;
    });
  }


  ngOnInit(): void {
  }

}
