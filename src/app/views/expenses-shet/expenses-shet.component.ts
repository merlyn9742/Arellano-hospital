import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  medicine: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { 
    price: 200,
    medicine: 'Parecetamol'
  }
];

@Component({
  selector: 'app-expenses-shet',
  templateUrl: './expenses-shet.component.html',
  styleUrls: ['./expenses-shet.component.scss']
})
export class ExpensesShetComponent implements OnInit {

  displayedColumns: string[] = ['price', 'medicine'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
