import { User1 } from '../User1';
import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
    selector: 'register-page',
    templateUrl: './register.component.html',
  })
export class  RegisterComponent implements OnInit{
 reg:boolean=true;
  model=new User1();
  constructor(private http:HttpClient,private mem: DesignutilityService,private router: Router) { }
  ngOnInit(): void {
    
  }
   submit(data: any){
      this.mem.setUsers(data.value);
      console.log(data);
      this.reg=!this.reg;
      this.mem.getposts().subscribe((res: any)=>console.log(res));
      this.router.navigateByUrl('/login');
   }

}
