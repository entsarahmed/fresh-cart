"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[939],{939:(C,c,i)=>{i.r(c),i.d(c,{ForgetpasswordComponent:()=>x});var p=i(6814),r=i(95),t=i(4769),m=i(9862);let u=(()=>{class s{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}forgetPassword(e){return this._HttpClient.post(this.baseUrl+"forgotPasswords",e)}resetCode(e){return this._HttpClient.post(this.baseUrl+"verifyResetCode",e)}resetPassword(e){return this._HttpClient.put(this.baseUrl+"resetPassword",e)}static#t=this.\u0275fac=function(o){return new(o||s)(t.LFG(m.eN))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var l=i(1120);function g(s,a){if(1&s&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function d(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.forgetPassword())}),t.TgZ(2,"label",3),t._uU(3,"email"),t.qZA(),t._UZ(4,"input",4),t.TgZ(5,"button",5),t._uU(6,"Forget Password"),t.qZA(),t.YNc(7,g,2,1,"p",6),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.forgetForm),t.xp6(6),t.Q6J("ngIf",e.userMsg)}}function f(s,a){if(1&s&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function w(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.resetCode())}),t.TgZ(2,"label",8),t._uU(3,"Reset Code"),t.qZA(),t._UZ(4,"input",9),t.TgZ(5,"button",5),t._uU(6,"Reset Code"),t.qZA(),t.YNc(7,f,2,1,"p",6),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.resetCodeForm),t.xp6(6),t.Q6J("ngIf",e.userMsg)}}function h(s,a){if(1&s&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function _(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.newPassword())}),t.TgZ(2,"label",10),t._uU(3,"Reset Password"),t.qZA(),t._UZ(4,"input",11),t.TgZ(5,"button",5),t._uU(6,"Reset Password"),t.qZA(),t.YNc(7,h,2,1,"p",6),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.resetPassword),t.xp6(6),t.Q6J("ngIf",e.userMsg)}}let x=(()=>{class s{constructor(e,o){this._ForgetpassService=e,this._Router=o,this.step1=!0,this.step2=!1,this.step3=!1,this.email="",this.userMsg="",this.forgetForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.email])}),this.resetCodeForm=new r.cw({resetCode:new r.NI("",[r.kI.required,r.kI.pattern(/^(1-6) $/)])}),this.resetPassword=new r.cw({newPassword:new r.NI("")})}forgetPassword(){let e=this.forgetForm.value;this.email=e.email,this._ForgetpassService.forgetPassword(e).subscribe({next:o=>{console.log(o),this.userMsg=o.message,this.step1=!1,this.step2=!0},error:o=>{console.log(o),this.userMsg=o.error.message}})}resetCode(){this._ForgetpassService.resetCode(this.resetCodeForm.value).subscribe({next:o=>{console.log(o),this.userMsg=o.status,this.step1=!1,this.step2=!1,this.step3=!0},error:o=>{this.userMsg=o.error.message}})}newPassword(){let e=this.resetPassword.value;e.email=this.email,this._ForgetpassService.resetPassword(e).subscribe({next:o=>{o.token&&(localStorage.setItem("eToken",o.token),this._Router.navigate(["/home"]))},error:o=>{this.userMsg=o.error.message}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(u),t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-forgetpassword"]],standalone:!0,features:[t.jDz],decls:3,vars:3,consts:[["class","w-50  mx-auto rounded bg-main-light p-3 shadow",4,"ngIf"],[1,"w-50","mx-auto","rounded","bg-main-light","p-3","shadow"],[3,"formGroup","ngSubmit"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],[1,"main-btn","w-100","mt-3"],["class","mt-2 text-center alert alert-danger w-75 mx-auto p-1 mb-0 ",4,"ngIf"],[1,"mt-2","text-center","alert","alert-danger","w-75","mx-auto","p-1","mb-0"],["for","resetCode"],["formControlName","resetCode","type","text","id","resetCode",1,"form-control"],["for","newPassword"],["formControlName","newPassword","type","text","id","newPassword",1,"form-control"]],template:function(o,n){1&o&&(t.YNc(0,d,8,2,"section",0),t.YNc(1,w,8,2,"section",0),t.YNc(2,_,8,2,"section",0)),2&o&&(t.Q6J("ngIf",n.step1),t.xp6(1),t.Q6J("ngIf",n.step2),t.xp6(1),t.Q6J("ngIf",n.step3))},dependencies:[p.ez,p.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return s})()}}]);