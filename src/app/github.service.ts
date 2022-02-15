import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repo: string = '';

  constructor(private httpClient: HttpClient) {
    environment.userName = 'James';
   }

  //github profiles
  getUserInfo(){
    return this.httpClient.get("https://api.github.com/users/"+ environment.userName +"?client_id=" + environment.clientId + "&client_secret="+ environment.clientSecret);
  }

  //for github repos
  getUserRepos(){
    return this.httpClient.get("https://api.github.com/users/"+environment.userName +"repos?client_id="+environment.clientId + "&client_secret=" + environment.clientSecret);
  }

  searchRepos() {
    return this.httpClient.get('https://api.github.com/search/repositories?q=', ({
      headers: new HttpHeaders({Authorization: `token ${environment.apiKey}`})
    }))
  }
  updateProfile(userName:string){
    environment.userName = userName
  }
  updateRepo(repoName:string) {
    this.repo = repoName;
  }


}

