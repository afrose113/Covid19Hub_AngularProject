import { Component, OnInit } from '@angular/core';
//
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignutilityService } from '../appServices/designutility.service';
@Component({
  selector: 'app-donatenow',
  templateUrl: './donatenow.component.html',
  styleUrls: ['./donatenow.component.css']
})
export class DonatenowComponent implements OnInit {

  constructor(private service:DesignutilityService,private router:Router) { }

  ngOnInit(): void {
  }
  fname: string = "";
  add: string = "";
  phNo: string = "";
  state: string = "";
  country:string = "";
  amount:string ="";
  //phNo:'',state:'',country:'',amount:''
public registerObj={fname:'',  add:'',phNo:'',state:'',country:'',amount:''};
  // onSubmit(formValue:NgForm){
  //   console.log(formValue);
  // }
  sendData()
  {
    console.log(this.registerObj);
    this.service.sendData(this.registerObj);
    this.router.navigate(['/heros'])
  
  }
  
  
  // resetForm(formValue: NgForm){
  //   formValue.reset();
  // }

}
