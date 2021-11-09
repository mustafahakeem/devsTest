import { Component, OnInit } from '@angular/core';
import * as json from './../../../login.json';
import { FormControl , Validators ,  FormGroup , FormControlName , FormsModule , FormBuilder  } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  dataa = json; 
  credentials: {username: string, password: string};
  form: FormGroup;
  submitted : boolean = false;
  constructor(
    private fb : FormBuilder,
    private router : Router,
  ) {     
     
  }

  ngOnInit(): void {
    console.log(this.dataa['data']);
    this.form = this.fb.group({
      userName : ["", [Validators.required]],
      password : ["", [Validators.required]]
    });

  }

  loginClicked() {
    if(this.form.valid){
      if(this.form.controls['userName'].value == this.dataa['data']['username'] && this.form.controls['password'].value == this.dataa['data']['password']){
        this.router.navigateByUrl('/table');
      }else if(this.form.controls['userName'].value == this.dataa['data']['username'] && this.form.controls['password'].value != this.dataa['data']['password']){
        // this.toastr.error("Invalid Credentials")
      }else if(this.form.controls['userName'].value != this.dataa['data']['username']){

      }else{

      }
    }else{
      this.submitted = true;
    }

  }
}
