import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { User } from '../User';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css'],
})
export class VaccinationComponent implements OnInit {
  model = new User();
  vaccinationData: any;
  vD: any;
  contact!: any[];
  stateI: any;
  regContact: String = '';
  flag: boolean = false;

  default: any = 'Choose...';
  name: any = '';
  age: any = '';

  constructor(private _msgService: DesignutilityService) {}

  ngOnInit(): void {
    this._msgService.vaccination().subscribe((vaccinationData) => {
      this.vD = vaccinationData;
      console.log(this.vD);
      this.contact = this.vD.data.contacts.regional;
    });
  }
  submit(data: any) {
    this.stateI = data.value.state;
    for (let i = 0; i < this.contact.length; i++) {
      if (this.stateI.toLowerCase() === this.contact[i].loc.toLowerCase()) {
        this.regContact = this.contact[i].number;
        this.flag = true;
      }
    }
    if (this.flag === false) {
      this.regContact = 'Please Enter State Name Correctly';
    }
  }
  submitData() {
    alert('Your Vaccination is booked!');
  }
}
