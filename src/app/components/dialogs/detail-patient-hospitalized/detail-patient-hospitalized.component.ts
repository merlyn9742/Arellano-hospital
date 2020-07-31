import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-detail-patient-hospitalized',
  templateUrl: './detail-patient-hospitalized.component.html',
  styleUrls: ['./detail-patient-hospitalized.component.scss']
})
export class DetailPatientHospitalizedComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<DetailPatientHospitalizedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
