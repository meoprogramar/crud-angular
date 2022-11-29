import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable()
export class PostService {
   url = '/posts';

   constructor(private http: HttpClient) {}

   getAll(): Observable<Post[]> {
      return this.http.get<Post[]>(this.url);
   }

   getById(postId: String): Observable<Post> {
      return this.http.get<Post>(`${this.url}/${postId}`);
   }

   add(post: Post): Observable<Post> {
      return this.http.post<Post>(this.url, post);
   }

   update(post: Post, postId?: number): Observable<Post> {
      return this.http.patch<Post>(`${this.url}/${postId}`, post);
   }

   remove(postId: number) {
      return this.http.delete<Post>(`${this.url}/${postId}`);
   }
}
