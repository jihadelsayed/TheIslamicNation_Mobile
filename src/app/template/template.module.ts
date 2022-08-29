import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatePageRoutingModule } from './template-routing.module';

import { TemplatePage } from './template.page';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatePageRoutingModule,

  ],
  declarations: [TemplatePage,    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ]
})
export class TemplatePageModule {}
