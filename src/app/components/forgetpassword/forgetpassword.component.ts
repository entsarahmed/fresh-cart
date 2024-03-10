import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetpassService } from 'src/app/core/services/forgetpass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {


constructor(private _ForgetpassService:ForgetpassService,private _Router:Router){}

step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string='';
userMsg:string='';

forgetForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
})


resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl('',[Validators.required,Validators.pattern(/^(1-6) $/)])
})


resetPassword:FormGroup = new FormGroup({
newPassword:new FormControl('')
})

forgetPassword():void{
  let userEmail =this.forgetForm.value;
  this.email=userEmail.email;
this._ForgetpassService.forgetPassword(userEmail).subscribe({
  next:(response)=>{
console.log(response);
this.userMsg=response.message;
this.step1=false;
this.step2=true;
  },
  error:(err)=>{
console.log(err)
this.userMsg=err.error.message;

  }
})
}

resetCode():void{
  let resetCode =this.resetCodeForm.value;
this._ForgetpassService.resetCode(resetCode).subscribe({
  next:(response)=>{
console.log(response);
this.userMsg=response.status;
this.step1=false;
this.step2=false;
this.step3=true;
  },
  error:(err)=>{
    this.userMsg=err.error.message;
    }
})
}


newPassword():void{
  let resetForm =this.resetPassword.value;

  resetForm.email=this.email
this._ForgetpassService.resetPassword(resetForm).subscribe({
  next:(response)=>{
if(response.token){
localStorage.setItem('eToken',response.token)
this._Router.navigate(['/home'])
}
  },
  error:(err)=>{
this.userMsg=err.error.message
  }
})
}


}
