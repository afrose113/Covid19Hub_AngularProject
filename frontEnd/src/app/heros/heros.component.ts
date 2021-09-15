import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
apicalls:any;
  constructor(private apiService: DesignutilityService ){} 

  ngOnInit(): void {
    this.apiService.apicall().subscribe((data)=>
    {
     this.apicalls=data.covid;
      console.log(this.apicalls);
      
    })
  }

}
