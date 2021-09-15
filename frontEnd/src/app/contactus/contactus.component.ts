import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  c = new Contact();
  constructor() {}

  ngOnInit(): void {}
  submit(data: any) {
    alert('Our Team will contact you in 24 hours');
  }
}
