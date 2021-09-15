import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _msgService: DesignutilityService,
    private router: Router
  ) {}
  product: any;

  onDonate() {
    this.router.navigateByUrl('/donatenow');
  }
  /*c1(){
    this.router.navigateByUrl("/blog");
  }*/
  ngOnInit(): void {
    // this.product = this._msgService.product;
    this._msgService.product().subscribe((productData) => {
      this.product = productData;
      console.log(this.product);
    });
  }
}
