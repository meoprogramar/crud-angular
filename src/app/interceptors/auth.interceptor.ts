import {
   HttpEvent,
   HttpHandler,
   HttpInterceptor,
   HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   intercept(
      req: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      req = req.clone({
         setHeaders: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjdkNThmODJhODFjMmRlZWYwNGU4NGMiLCJzdWJfdHlwZSI6ImFkbWluIiwiaXNzIjoicmVnbnV0ZXMiLCJpYXQiOjE2Njk2MDE0ODgsInNjb3BlIjoiYWQ6cnAgbWE6cnAgaG06cnAgcm06cnAgc206cnAgcmc6cnAgb3A6cnAgcGE6cnAgdXM6dWEgdXM6dWF0IHVzOnV0IGFkOmMgYWQ6ciBhZDpyYSBhZDp1IG1hOmMgbWE6ciBtYTpyYSBtYTp1IGhtOmMgaG06ciBobTpyYSBobTp1IHNtOmMgc206ciBzbTpyYSBzbTp1IG9wOmMgb3A6ciBvcDpyYSBvcDp1IGh1b3A6YyBodW9wOmQgaHNvcDpjIGhzb3A6ZCBybTpjIHJtOnIgcm06cmEgcm06dSByZzpjIHJnOnIgcmc6cmEgcmc6dSBwYTpjIHBhOnIgcGE6cmEgcGE6dSBoZXBhOmMgaGVwYTpkIG11OnJhIG11OnUgbXU6ciBoZTpyIGhzOnJhIGhzOnUgaHM6ciBodTpjIGh1OnIgaHU6cmEgaHU6dSBodTpyIGh1OnVjIGh1OnUgaHVzdXQ6YyBodXN1dDpyYSBodXN1dDp1IGh1c3V0OmQgc3V0OnJhIGh1c3U6cmEgaHVzdTpyIGh1c3U6dSBodXN1OnVzIHBhc3U6cmEgc3U6cmEgYXM6YyBhczpyYSBhczpkIHdhOmMgd2E6ciB3YTpyYSB3YTp1IGJlOmMgYmU6ciBiZTpyYSBiZTp1IGJlOnVzIGhlY3JlOmMgaGVjcmU6ciBoZWNyZTpyYSBoZWNyZTp1IGNyZTp1cyBjcmU6dW8gY3JlOnIgY3JlOnJhIGNyZTp1IGhlc3JlOmMgaGVzcmU6ciBoZXNyZTpyYSBoZXNyZTp1IHNyZTp1cyBzcmU6dW8gcGFzcmU6YyBwYXNyZTpyYSBzcmU6ciBzcmU6cmEgc3JlOnUgYXQ6YyBhdDpyIGF0OnJhIGF0OmQgbWU6cmEgbWU6dSBtZTpkIHJlOnVpYyBhbDpyIGFsOnJhIHJzOnIiLCJleHAiOjE2Njk2MzAyODh9.sEmhlFC7_GxYv-ig_MdjR0QseH0EObT3P5Jq06oC4MetX8PsKXRyuUeYyKlD1_YcuIVCZosGP_xqwB5_Fk2xs32wTYBY217yfJ8-WXDe-B60QsWvstOoWBjQfh7o108Dxhf3I8s1HxLZ8bTqJUf95cNVgZQGJa0NfkvHWkqTvQziJr_U574KI3mCS4i6JKKKS3Uf-fWWLI89XhuMlXCwEjJhMFzV31hPSUg3on8LS6GDZj8ZFDN31ULg5NKzYt9b3Z2gxcRtY7_Fo3qyRrL914Le5AzbQhcUT5XYCxn-Ra_inCDQSydJLIZGD3NTUl1VSo1ivfQvI5D9sHboGQ9UCw`,
         },
      });

      return next.handle(req);
   }
}
