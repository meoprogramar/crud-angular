import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/models/post';

@Component({
   selector: 'app-post-dialog',
   templateUrl: './post-dialog.component.html',
   styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent implements OnInit {
   post!: Post;
   editing!: boolean;

   constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: Post,
      public dialogRef: MatDialogRef<PostDialogComponent>
   ) {}

   ngOnInit(): void {
      this.editing = !!this.data.id;
   }

   onCancel(): void {
      this.dialogRef.close();
   }
}
