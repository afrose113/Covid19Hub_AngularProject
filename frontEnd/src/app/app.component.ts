import { Component } from '@angular/core';
import { DesignutilityService } from './appServices/designutility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap';
  
  constructor(private _msgService: DesignutilityService) {}
  product: any;

  ngOnInit(): void {
    // this.product = this._msgService.product;
    this._msgService.product().subscribe((productData) => {
      this.product = productData;
      console.log(this.product);
    });
  }
}

