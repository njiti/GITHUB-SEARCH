import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() githubRepos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
function input() {
  throw new Error('Function not implemented.');
}

