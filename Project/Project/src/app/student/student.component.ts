import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private hold:HolderService,private rou:Router) { }
  mname:string='';

  studentname=new FormGroup({
    studentname:new FormControl()
  });

  ngOnInit(): void {
    this.mname=this.hold.getusername();
    this.studentname.controls.studentname.setValue(this.mname);
  }

  logout():void
  {
    this.hold.logout();
    this.rou.navigateByUrl("/Login");
  }

  opeartion=new FormGroup({
    operationbox1:new FormControl(),
    operationbox2:new FormControl(),
    operationbox3:new FormControl()
  });
  opbox1out:any='';
  opbox2out:any='';
  opbox3out:any='';
  public opbox1():void
  {
    this.opbox1out=this.getout(this.opeartion.controls.operationbox1.value);
    sessionStorage.setItem("box1",this.opeartion.controls.operationbox1.value);
  }
  public opbox2():void
  {
    this.opbox2out=this.getout(this.opeartion.controls.operationbox2.value);
    sessionStorage.setItem("box2",this.opeartion.controls.operationbox2.value);
  }
  public opbox3():void
  {
    this.opbox3out=this.getout(this.opeartion.controls.operationbox3.value);
    sessionStorage.setItem("box3",this.opeartion.controls.operationbox3.value);
  }









  public getout(calculation:string):any
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
