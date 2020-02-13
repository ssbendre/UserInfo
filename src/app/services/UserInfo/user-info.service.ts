import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private APIAllUsersUrl;

  constructor(public http: HttpClient) {
    this.APIAllUsersUrl = 'http://localhost:3000/users';
  }

  public getUserData() {
    return this.http.get(this.APIAllUsersUrl);
  }

  public getUserDataById(userId) {
    return this.http.get(this.APIAllUsersUrl + userId);
  }

  public addNewUserData(user) {
    return this.http.post(this.APIAllUsersUrl, user);
  }

  public editUserDataById(user) {
    return this.http.put(this.APIAllUsersUrl, user);
  }

  public deleteUserDataById(user) {
    return this.http.delete(this.APIAllUsersUrl + user);
  }
}
