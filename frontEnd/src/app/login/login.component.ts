import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesignutilityService } from '../appServices/designutility.service';

//import { first } from 'rxjs/operators';
@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    isSubmitted  =  false;
    member:any;
    logvalue:any;
    flag:boolean=true;
    constructor(private router: Router, private _mem: DesignutilityService,private formBuilder: FormBuilder ) { }
    ngOnInit() {
        this.loginForm  =  this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get formControls() { return this.loginForm.controls; }
    login(){
        this.logvalue=this.loginForm.value;
        this.isSubmitted = true;
        this._mem.getposts().subscribe(
            (res: any)=>this.member=res
        );
        if(this.loginForm.invalid){
          return;
        }
        for(let m of this.member)
        {
            if((m.email===this.logvalue.email) && (m.password===this.logvalue.password))
            {
                this.flag=false;
            }
        }
        if(this.flag===false)
        {
            this.router.navigateByUrl('/home');
        }
        else
        {
            this.router.navigateByUrl('/login');
        }
      }
  }
