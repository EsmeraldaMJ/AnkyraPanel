import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './components/form/form.component';
import { BussinesComponent } from './components/bussines/bussines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';

import { MaterialModule } from './modules/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    BussinesComponent,
    BannerTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
