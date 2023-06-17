import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent {
  public error: string = "";
  public success: string = "";

  constructor(private authService: AuthService) {}

  onSubmit(value: any) {
    console.log(value);
    this.authService.signIn({ email: value?.email }).subscribe((res: any) => {
      if (!res || res?.length <= 0) {
        alert("Error");
      } else if (res?.[0]?.password != value?.password) {
        alert("Wrong password of email");
      } else if (res?.[0]?.password == value?.password) {
        alert("Success");
      }
    });
  }
}
