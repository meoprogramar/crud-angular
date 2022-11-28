import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserDialogComponent } from 'src/app/shared/user-dialog/user-dialog.component';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
   providers: [UserService],
})
export class HomeComponent {
   @ViewChild(MatTable)
   table!: MatTable<any>;
   displayedColumns: string[] = [
      'name',
      'cpf',
      'phone',
      'birth_date',
      'actions',
   ];
   users!: User[];
   loadingUsers: boolean = false;

   constructor(public dialog: MatDialog, public userService: UserService) {
      this.loadUsers();
   }

   async loadUsers() {
      this.loadingUsers = true;
      this.users = [];

      try {
         this.users = await lastValueFrom(this.userService.getAll());
      } catch (error) {
         console.log('Error');
      } finally {
         this.loadingUsers = false;
      }
   }

   createUser() {
      const dialogRef = this.dialog.open(UserDialogComponent, {
         width: '500px',
         data: {
            name: '',
            cpf: '',
            birth_date: '',
            phone: '',
         },
      });

      dialogRef.afterClosed().subscribe((result) => {
         if (result) {
            this.users.push(result);
            this.table.renderRows();
         }
      });
   }

   editUser(user: User) {
      const dialogRef = this.dialog.open(UserDialogComponent, {
         width: '500px',
         data: Object.assign({}, user),
      });

      dialogRef.afterClosed().subscribe((result) => {
         if (result) {
            const userIndex = this.users.findIndex(
               (item) => item.id === user.id
            );
            this.users[userIndex] = result;
            this.table.renderRows();
         }
      });
   }

   deleteUser(user: User) {
      const userIndex = this.users.findIndex((item) => item.id === user.id);
      this.users.splice(userIndex, 1);
      this.table.renderRows();
   }
}
