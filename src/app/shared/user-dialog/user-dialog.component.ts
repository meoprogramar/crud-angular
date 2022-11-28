import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user.interface';

@Component({
   selector: 'app-user-dialog',
   templateUrl: './user-dialog.component.html',
   styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
   user!: User;
   editing!: boolean;

   constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: User,
      public dialogRef: MatDialogRef<UserDialogComponent>
   ) {}

   ngOnInit(): void {
      this.editing = !!this.data.id;
   }

   onCancel(): void {
      this.dialogRef.close();
   }
}
