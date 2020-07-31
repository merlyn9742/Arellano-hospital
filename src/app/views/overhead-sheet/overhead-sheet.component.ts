import { Component, OnInit } from '@angular/core';
import { ReceptionInterface } from 'src/app/interfaces/reception.interface';
import { overheadInterface } from 'src/app/interfaces/administrativeInterface';


const ELEMENT_DATA: overheadInterface[] = [
  { name: 'Hydrogen', lastName: 'Perez', type: 'Normal', quickDescription: 'Habitacion y cuidados', total: 12 }
];

@Component({
  selector: 'app-overhead-sheet',
  templateUrl: './overhead-sheet.component.html',
  styleUrls: ['./overhead-sheet.component.scss']
})
export class OverheadSheetComponent implements OnInit {

  constructor() { }


  displayedColumns: string[] = ['name', 'lastName', 'type', 'quickDescription', 'total'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
