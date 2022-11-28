import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { Page404Component } from './views/page404/page404.component';
import { ContentComponent } from './shared/content/content.component';
import { UserDialogComponent } from './shared/user-dialog/user-dialog.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      Page404Component,
      ContentComponent,
      UserDialogComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,

      MatToolbarModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
