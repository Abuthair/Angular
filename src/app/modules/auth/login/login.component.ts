import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  retUrl: string = '';
  user!: User;
  constructor(
    private _router: Router,
    private _loginService: LoginserviceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map: ParamMap) => {
      let url = map.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit = (loginForm: FormGroup) => {
    let user = loginForm.value;
    console.log(user);
    this._loginService.loginUser(user.username, user.password).subscribe({
      next: (data: boolean) => {
        if (!data) {
          alert('Please enter a valid credentials');
          loginForm.reset();
          return;
        }
        if (data) {
          console.log(`${data}`);
          this._router.navigate([this.retUrl]);
        }
      },
    });
  };
}
