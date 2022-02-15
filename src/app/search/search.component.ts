import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: any;
  repos: any;
  userName: any = 'james'

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.githubService.updateProfile(this.userName);
    this.githubService.getUserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

}
