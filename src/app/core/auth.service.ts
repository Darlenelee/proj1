import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() { }
  loginWitHCredentials(username: string, password: string): boolean {
    return username === 'liyijun';
  }
}
