import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HolderService } from '../holder.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private holder:HolderService,private rout:Router){}
  
  //Following code is used to swap the Login and Register page.
  condition:boolean=true;
  log_reg():void {
    this.condition=true;
  }
  reg_log():void{
    this.condition=false;
  }
  loguser:string="0";




  //Below Mention code is used to Get the User Login data
  paraflag:boolean=false;
  passflag:boolean=false;

  Userlog=new FormGroup({
    username:new FormControl(),
    passwordlog:new FormControl(),
    accountname:new FormControl()
  });
  getdatalog():void{
    this.paraflag=false;
    this.passflag=this.holder.verify(this.Userlog.controls.username.value,this.Userlog.controls.passwordlog.value,this.Userlog.controls.accountname.value);
    if(this.passflag)
    {
      if(this.holder.getaccount()=="Master")
      {
        this.rout.navigateByUrl("/Master");
      }
      else if(this.holder.getaccount()=="Student"){
        this.rout.navigateByUrl("/Student");
      }
    }
    if(!this.passflag)
    {
      this.paraflag=true;
    }
  }

  //Below mention code is used to Get User Register Data
  Regdetails=new FormGroup({
    uname:new FormControl(),
    email:new FormControl('',Validators.email),
    moblie:new FormControl('',Validators.required),
    account:new FormControl(),
    password:new FormControl()
  });
  isvalid:boolean=false;
  isnotvalid:boolean=true;

  senddata(urname:any='',actypr:string,pword:string):string[]{
    var daata=[urname,actypr,pword];
    return daata;
  }
  getdatareg():void{//use this function to get register data.
    this.isvalid=false;
    this.isnotvalid=true;
    if(this.Regdetails.valid==true)
    {
      this.isvalid=this.Regdetails.valid;
      
    }
    else{
      this.isnotvalid=this.Regdetails.valid;
    }
    

    //this.senddata(this.Regdetails.controls.email.value,this.Regdetails.controls.account.value,this.Regdetails.controls.password.value);
    this.holder.adduserdetails(this.senddata(this.Regdetails.controls.email.value,this.Regdetails.controls.account.value,this.Regdetails.controls.password.value));
    //*************************************** */
  }
  ngOnInit(): void {
  }

}
