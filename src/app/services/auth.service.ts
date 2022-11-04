import { Router } from '@angular/router';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private product$ = new Subject<boolean>();
  selectedProduct$ = this.product$.asObservable();

  constructor(private router: Router) { }

  setProduct(product: boolean) {
    this.product$.next(product);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  // return true if token is present in localstorage else false
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email == "admin@gmail.com" && password == "admin@123") {
      this.setToken("qwertyuiop");
      return of({ email: 'admin@gmail.com' });
    }
    else {
      return throwError(new Error('Failed to login'));
    }
  }
}
