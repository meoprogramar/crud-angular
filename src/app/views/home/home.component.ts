import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Patient } from 'src/app/interfaces/patient.interface';
import { PatientDialogComponent } from 'src/app/shared/patient-dialog/patient-dialog.component';

const ELEMENT_DATA: Patient[] = [
   {
      id: '6375340b276ec9da85212752',
      created_at: '2022-11-16T19:03:39.632Z',
      updated_at: '2022-11-16T19:03:39.632Z',
      name: 'Paciente Teste ',
      cpf: '26606226040',
      birth_date: '1950-02-22',
      phone: '22222222777',
      active: true,
      address: {
         zip_code: '58410000',
         street: 'Avenida Professor Almeida Barreto',
         number: '22',
         district: 'Estação Velha',
         city: 'Campina Grande',
         state: 'PB',
         birth_city: 'Campina Grande',
      },
      is_authorized: false,
      registrant_id: '627d786336fa424d04d5518a',
      gender: 'male',
      health_entities: ['629fa924b369197af419d0c9'],
   },
   {
      id: '6372f3ad276ec9da8520e976',
      created_at: '2022-11-15T02:04:29.975Z',
      updated_at: '2022-11-15T02:04:29.975Z',
      name: 'Orcina Pereira Diasmático 5',
      cpf: '55831451020',
      birth_date: '2001-01-01',
      phone: '99999999999',
      active: true,
      address: {
         zip_code: '58410000',
         street: 'Avenida Professor Almeida Barreto',
         number: '22',
         district: 'Estação Velha',
         city: 'Campina Grande',
         state: 'PB',
         birth_city: 'Campina Grande',
      },
      is_authorized: false,
      registrant_id: '627d786336fa424d04d5518a',
      gender: 'male',
      health_entities: ['627d77056137da8ff59f84f6'],
   },
   {
      id: '63614f5a3faadcf8921901ee',
      created_at: '2022-11-01T16:54:50.648Z',
      updated_at: '2022-11-01T16:55:17.345Z',
      name: 'Michel Sipser',
      cpf: '22945585022',
      birth_date: '1922-02-22',
      phone: '22222222222',
      active: true,
      address: {
         zip_code: '58410000',
         street: 'Avenida Professor Almeida Barreto',
         number: '22',
         district: 'Estação Velha',
         city: 'Campina Grande',
         state: 'PB',
         birth_city: 'Campina Grande',
      },
      is_authorized: false,
      registrant_id: '627d782936fa424d04d5517c',
      gender: 'male',
      health_entities: ['627d73bf6137da8ff59f8188'],
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
      'gender',
      'actions',
   ];
   dataSource = ELEMENT_DATA;

   constructor(public dialog: MatDialog) {}

   createPatient() {
      const dialogRef = this.dialog.open(PatientDialogComponent, {
         width: '500px',
         data: {
            name: '',
            cpf: '',
            birth_date: '',
            phone: '',
            gender: '',
         },
      });

      dialogRef.afterClosed().subscribe((result) => {
         if (result) {
            this.dataSource.push(result);
            this.table.renderRows();
         }
      });
   }

   editPatient(patient: Patient) {
      const dialogRef = this.dialog.open(PatientDialogComponent, {
         width: '500px',
         data: Object.assign({}, patient),
      });

      dialogRef.afterClosed().subscribe((result) => {
         if (result) {
            const patientIndex = this.dataSource.findIndex(
               (item) => item.id === patient.id
            );
            this.dataSource[patientIndex] = result;
            this.table.renderRows();
         }
      });
   }

   deletePatient(patient: Patient) {
      const patientIndex = this.dataSource.findIndex(
         (item) => item.id === patient.id
      );
      this.dataSource.splice(patientIndex, 1);
      this.table.renderRows();
   }
}
