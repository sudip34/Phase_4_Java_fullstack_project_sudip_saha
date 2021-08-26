import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/common/login';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  adminName:string=sessionStorage.getItem('adminName');
  message:string;
  adminOld:Login;
  adminNew:Login=new Login();

  constructor(private loginservice:LoginServiceService, private router:Router) { }

  ngOnInit(): void {
    this.loginservice.getTheLoginCredential(this.adminName).subscribe(
      data=>this.adminOld=data
    );
  }


  resetPassword(f:any){
    
    if(f.value.password1===f.value.password2){
      console.log(f.value.password1);
      console.log(f.value.password2);
      console.log(this.adminOld.adminName);
      console.log(this.adminOld.id);
      
      this.adminNew.id=this.adminOld.id;
      this.adminNew.adminName=this.adminOld.adminName;
      this.adminNew.password=f.value.password1;

      console.log(this.adminNew);

      this.loginservice.updateTheLoginCredential(this.adminNew).subscribe(
        res =>{
          console.log(res);
          this.ngOnInit();
          this.router.navigate(['dashboard']);

        },
        err=>{console.log(err)
        }
      );
      this.ngOnInit();        

    }else{
      this.message="Your given passwords are not matched or empty . please give carefully the same Password!"
    }
    
  }
}
