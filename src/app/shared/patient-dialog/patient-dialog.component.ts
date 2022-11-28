import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Patient } from 'src/app/interfaces/patient.interface';

@Component({
   selector: 'app-patient-dialog',
   templateUrl: './patient-dialog.component.html',
   styleUrls: ['./patient-dialog.component.css'],
})
export class PatientDialogComponent implements OnInit {
   patient!: Patient;
   editing!: boolean;

   constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: Patient,
      public dialogRef: MatDialogRef<PatientDialogComponent>
   ) {}

   ngOnInit(): void {
      this.editing = !!this.data.id;
   }

   onCancel(): void {
      this.dialogRef.close();
   }
}
