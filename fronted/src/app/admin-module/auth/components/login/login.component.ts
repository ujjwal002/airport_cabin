import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, EmailValidator, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  
  ngOnInit(): void {
      
  }
  constructor(private formBuilder:FormBuilder,private authservice:AuthServiceService,private toasterService:ToastrService){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })

  }
  onSubmit(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    if(this.loginForm.valid===true){
      this.authservice.login(this.loginForm.value).subscribe((response)=>{

        this.toasterService.success("Login successfully")
      })
    }

  }

}
