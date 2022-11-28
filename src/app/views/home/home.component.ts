import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/interfaces/user.interface';
import { UserDialogComponent } from 'src/app/shared/user-dialog/user-dialog.component';

const ELEMENT_DATA: User[] = [
   {
      id: '62b0e13145efc1c1a0481c84',
      created_at: '2022-06-20T21:05:53.591Z',
      updated_at: '2022-06-20T21:05:53.591Z',
      name: 'Admin Automatizado',
      cpf: '29387587584',
      birth_date: '1991-05-14',
      phone: '83998765432',
      email: 'nuzl2e2v5hszat9jotofhffkv@email.com',
      active: false,
      address: {
         zip_code: '58411340',
         street: 'Avenida Henrique Alexandrino de Melo',
         number: '123',
         district: 'Distrito Industrial',
         city: 'Campina Grande',
         state: 'PB',
      },
      is_authorized: false,
   },
   {
      id: '62a884b12f448bd86c617218',
      created_at: '2022-06-14T12:53:05.864Z',
      updated_at: '2022-06-14T12:53:05.864Z',
      name: 'Gestor unidade para busca',
      cpf: '76637064041',
      birth_date: '1999-03-06',
      phone: '85346646656',
      email: 'gubusca@email.com',
      active: false,
      address: {
         zip_code: '58027578',
         street: 'Rua Ana Amélia de Sousa Pereira',
         number: '44',
         district: 'Alto do Céu',
         city: 'João Pessoa',
         state: 'PB',
      },
      is_authorized: false,
   },
   {
      id: '62a4980f605db548cb17a9ce',
      created_at: '2022-06-11T13:26:39.477Z',
      updated_at: '2022-06-11T13:26:39.477Z',
      name: 'Admin Automatizado Editado',
      cpf: '40116143606',
      birth_date: '1991-05-14',
      phone: '83998765432',
      email: 'frtupxxcpwnr3wh0o43ddgpu3qd@email.com',
      active: false,
      address: {
         zip_code: '58070010',
         street: 'Rua Tercília de Arruda Luna',
         number: '123',
         district: 'Formosa',
         city: 'Cabedelo',
         state: 'PB',
      },
      is_authorized: false,
   },
];

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
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
   dataSource = ELEMENT_DATA;

   constructor(public dialog: MatDialog) {}

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
            this.dataSource.push(result);
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
            const userIndex = this.dataSource.findIndex(
               (item) => item.id === user.id
            );
            this.dataSource[userIndex] = result;
            this.table.renderRows();
         }
      });
   }

   deleteUser(user: User) {
      const userIndex = this.dataSource.findIndex(
         (item) => item.id === user.id
      );
      this.dataSource.splice(userIndex, 1);
      this.table.renderRows();
   }
}
