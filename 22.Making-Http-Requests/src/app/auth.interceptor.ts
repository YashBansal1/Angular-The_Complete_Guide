import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request is on its way');
    const modifiedRea = req.clone({
      headers: req.headers.append('auth', 'xyz'),
    });
    return next.handle(modifiedRea);
    // return next.handle(req);
  }
}
