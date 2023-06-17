import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signIn(params: { email: string }) {
    return this.httpClient.get("http://localhost:3000/users", { params });
  }

  signUp(body: { email: string; password: string }) {
    return this.httpClient.post("http://localhost:3000/users", body);
  }
}
