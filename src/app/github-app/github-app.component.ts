import { error } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription!: Subscription;

  public githubUserQuery!: string;
  public githubProfile: any = 'njiti';
  public githubRepos: any[] | undefined;
  public errorMessage: string | undefined;
  profileData: any;


  constructor(private githubService:GithubService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public searchUser(){
    //get github profile
    this.githubService.getProfile(searchQuery).subscribe(next, (data) =>{
      this.githubProfile = data;
    });
    /*ngOnInit(): void{
      this.githubService.getProfile(searchQuery);
      this.subscription  = this.githubService.getProfile(searchQuery)
      .subscribe((response: any) => {
        this.profileData = response;
      });
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

    search(searchTerm: string){
      if (searchTerm !== ''){
        this.githubService.searchRepos(searchTerm);
      }
    }*/

    //get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe(next, (data) => {
      this.githubRepos = data;
    });
  }

}
function next(): ((value: any) => void) | Partial<import("rxjs").Observer<any>> | null | undefined {
  throw new Error('Function not implemented.');
}

function searchQuery(searchQuery: any, any: any) {
  throw new Error('Function not implemented.');
}

