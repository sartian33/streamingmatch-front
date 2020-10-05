//import { TextField } from "tns-core-modules/ui/text-field";
//import { TextField } from "ui/text-field/text-field";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { UserService } from "../../services/user.service";
import { User } from "../../model/user.model";
import { UtilityService } from "../../services/utility.service";
import { Page, TextField } from "@nativescript/core";
//import { Page } from "ui/page";
//import { isAndroid, device } from "platform";
//import * as app from "application";
  
@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html",
    providers: [UserService, UtilityService]
})
export class LoginComponent implements OnInit {

    @ViewChild('password') passwordField: ElementRef;
    @ViewChild('email') emailField: ElementRef;

    user: User;
    isAuthenticating = false;

    public hideIcon = String.fromCharCode(0xf070);
    public showIcon = String.fromCharCode(0xf06e);
    public showHideIcon: any;
    public hidePassword = true;

    emailError = "";
    passError = "";
    loginError = "";

    emailHasFocus = false;
    passHasFocus = false;

    public constructor(private router: RouterExtensions, private page: Page, private userService : UserService, private utilityService: UtilityService) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;
    }

    public hasEmailErrors() {
        const hasErrorMsg = !!this.emailError;

        if (!hasErrorMsg)
          return false;

        const isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);

        let hasError = hasErrorMsg || !isValidEmail;

        if (isValidEmail) {
          this.emailError = ""
          return false;
        }

        return hasError;
    }

    public hasPasswordErrors() {
        const hasErrorMsg = !!this.passError;
        if (!hasErrorMsg)
          return false;

        const isValidPassword = this.user.password.length > 0;
        let hasError = hasErrorMsg || !isValidPassword;

        if (isValidPassword) {
          this.passError = ""
          return false;
        }

        return hasError;
      }

      getEmailError() {
        return this.emailError;
      }

      getPasswordError() {

        return this.passError;
      }

      onEmailFocus() {
        this.emailHasFocus = true;
      }

      onPasswordFocus() {
        this.passHasFocus = true;

        this.updateErrors(false);
      }


    showHidePassword() {
        this.hidePassword = !this.hidePassword;
    }

    updateErrors(checkPass) {
        if (this.user.hasEmail()) {
            if (this.utilityService.isValidEmail(this.user.email)) {
                this.emailError = "";
            } else {
                this.emailError = "Invalid Email"
            }
        } else {
            this.emailError = "Email cannot be blank"
        }

        if (checkPass) {
            let length = this.user.password.length;
            if (length == 0) {
                this.passError = "Password cannot be blank";
            } else {
                this.passError = "";
            }
        }
    }

    hasLoginErrors() {
        return !!this.loginError;
    }

    getLoginError() {
        return this.loginError;
    }

    private isValidForm() {
        console.log("isValidForm");
        let isValid = !!this.emailError || !!this.passError;
        return !isValid;
    }

    login() {
        this.updateErrors(true);

 //       if (this.isValidForm()) {
            this.isAuthenticating = true;
            var res = this.userService.login(this.user).subscribe((response) => {
                if (response) {
                    this.isAuthenticating = false;
                    this.router.navigate(["/home"], {clearHistory: true});
                }
                else {
                    alert("ERROR");
                }
            },
            (error) => {
                console.log("ERROR")
                console.error(error);
            });
            /*
            console.log("RES");
            console.log(res);
            if (res) {
                this.isAuthenticating = false;
                this.router.navigate(["/home"], {clearHistory: true});
            }
            else {
                console.log("ERROR");
            } */
            /*.then((res) => {
                console.log("RES");
                console.log(res);
                this.isAuthenticating = false;
                this.router.navigate(["/home"], {clearHistory: true});
            }).catch(error => {
                this.isAuthenticating = false;
                this.loginError = error.message;
            });*/
   //     } else {
   //         console.log("else :(:(:(:(:(");
   //     }
    }


    isSubmitEnabled() {
        return !this.isAuthenticating && this.utilityService.isValidEmail(this.user.email);
      }

      isTablet() {
          return false;
 //       return this.utilityService.isTablet();
      }

      // You can configure your backend and present appropriate window for recovery.
      forgotPassword() {
        alert({
          title: "Forgot Password",
          message: "Configure your backend to add a forgot password. Check 'login-kinvey' branch to work with Kinvey backend.",
          okButtonText: "Close"
      });
      }

}
