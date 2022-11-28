import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
   url = '/admins';

   constructor(private http: HttpClient) {}

   getAll(): Observable<User[]> {
      return this.http.get<User[]>(this.url);
   }

   getById(userId: String): Observable<User> {
      return this.http.get<User>(`${this.url}/${userId}`);
   }

   add(user: User): Observable<User> {
      return this.http.post<User>(this.url, user);
   }

   update(user: User): Observable<User> {
      return this.http.patch<User>(this.url, user);
   }

   remove() {}
}
