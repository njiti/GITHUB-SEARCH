import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  string: any;
  repos: any;

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.githubService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }
}

