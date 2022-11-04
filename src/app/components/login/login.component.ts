import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/home']);
    }
  }
  onClick() {
    if (this.login.valid) {
      this.auth.login(this.login.value).subscribe((res) => {
        localStorage.setItem("email", res.email);
        localStorage.setItem("username","Admin");
        this.router.navigate(['/home']);
        this.toastr.success("Logged in Successfully");
      },
        (err: Error) => {
          this.toastr.error("Wrong login credentials!!!");
        })
    }
    console.log("clicked");
  }

}
