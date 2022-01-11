import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList:SalesPerson[]=[
    new SalesPerson("Anup","Kumar","anupkumar@gmail.com",5000),
    new SalesPerson("Zainab","Javed","anupkumar@gmail.com",3000),
    new SalesPerson("Farheen","Ali","anupkumar@gmail.com",2500),
    new SalesPerson("Mohammad","Yusuf","anupkumar@gmail.com",3700)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
