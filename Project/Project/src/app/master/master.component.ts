import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HolderService } from '../holder.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private hold:HolderService,private rou:Router) { }
  mname:string='';

  mastername=new FormGroup({
    mastername:new FormControl()
  });
  
  //******************************************************* */
  stdname1:string='';stdname2:string='';stdname3:string='';stdname4:string='';
  funstring1:any='';funstring2:any='';funstring3:any='';funstring4:any='';
  Resultbox1:string='';Resultbox2:string='';Resultbox3:string='';Resultbox4:string='';
  /********************************************************* */
  ngOnInit(): void {
    this.mname=this.hold.getusername();
    this.mastername.controls.mastername.setValue(this.mname);
    for(var i=0;i<sessionStorage.length;i++)
    {
      if(i==0)
      {
        this.stdname1=this.mname;
        this.funstring1=sessionStorage.getItem('box1');
        this.Resultbox1=this.getout(sessionStorage.getItem('box1'));
      }
      else if(i==1)
      {
        this.stdname2=this.mname;
        this.funstring2=sessionStorage.getItem('box2');
        this.Resultbox2=this.getout(sessionStorage.getItem('box2'));
      }
      else if(i==2)
      {
        this.stdname3=this.mname;
        this.funstring3=sessionStorage.getItem('box3');
        this.Resultbox3=this.getout(sessionStorage.getItem('box3'));
      }
    }
    
  }

  logout():void
  {
    sessionStorage.clear();
    this.hold.logout();
    this.rou.navigateByUrl("/Login");
  }






  /************************************************* */
  public getout(calculation:any):any
  {
    /******************************************************/
    function expression(number:any, operation:any) {
      if (!operation) return number;
      return operation(number);
    }
  
    function one(operation:any) {
        return expression(1, operation);
    }
    function two(operation:any) {
        return expression(2, operation);
    }
    function three(operation:any) {
        return expression(3, operation);
    }
    function four(operation:any) {
        return expression(4, operation);
    }
    function five(operation:any='') {
        return expression(5, operation);
    }
    function six(operation:any) {
        return expression(6, operation);
    }
    function seven(operation:any) {
        return expression(7, operation);
    }
    function eight(operation:any) {
        return expression(8, operation);
    }
    function nine(operation:any) {
        return expression(9, operation);
    }
    function zero(operation:any) {
        return expression(0, operation);
    }
  
    function plus(x:any){
        return function(y:any) {
            return y + x;
        }
    }
    function minus(x:any){
        return function(y:any) {
            return y - x;
        }
    }
    function times(x:any){
        return function(y:any) {
            return y * x;
        }
    }
    function divided_by(x:any){
        return function(y:any) {
            return Math.floor(y/x);
        }
    }
    /******************************************************/
    try{
      return eval(calculation);
    }
    catch{
      return "Invalid Function";
    }
    
  }
}
