import { Injectable } from '@angular/core';
import { sequenceEqual } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolderService {

  constructor() { }

    private IsMaster:boolean=false;
    private IsStudent:boolean=false;

    public GetisMaster():boolean{
      return this.IsMaster;
    }
    public GetisStudent():boolean{
      return this.IsStudent;
    }
    private username='';
    public getusername():string{return this.username};

    private accounttype:string=''; //It will store the user acount type.

    public getaccount(){ // It will return the account type to Login component Because accounttype is Private.
      return this.accounttype;
    }
    /* Sample data for testing*/
    // It will be get from Database.
    private userdetails:string[][]=[["Sakthi","1234"],["Anjali","7894"],["seenuvasan","5678"]];

    public verify(username:string,password:string,account:string):boolean
    {
      for(let i=0;i<this.userdetails.length;i++)
      {
        if(this.userdetails[i][0]==username && this.userdetails[i][1]==password)
        {
          this.username=this.userdetails[i][0];
          this.accounttype=account;
          if(this.accounttype=="Master")
          {
            this.IsMaster=true;
          }
          else(this.accounttype=="Student")
          {
            this.IsStudent=true;
          }
          return true;
        }
      }
      return false;
    }
    
    public adduserdetails(details:string[])
    {
      this.userdetails.push(details);
    }
    public logout():void
    {
      this.IsMaster=false;
      this.IsStudent=false;
      this.username='';
      this.accounttype='';
    }


    
}
