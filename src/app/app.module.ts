import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomerService } from './customerservice';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { TreeModule } from 'primeng/tree';

import { FileManagerComponent } from './file-manager/file-manager.component';
import { TableStructureComponent } from './table-structure/table-structure.component';
import { FileStructureComponent } from './file-structure/file-structure.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NodeService } from './nodeservice.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TreeTable, TreeTableModule } from 'primeng/treetable';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    TreeModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    TreeTableModule,
    BreadcrumbModule,
  ],
  declarations: [
    AppComponent,
    TableStructureComponent,
    FileStructureComponent,
    BreadcrumbComponent,
    FileManagerComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CustomerService, NodeService],
})
export class AppModule {}
