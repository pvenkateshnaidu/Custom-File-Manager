import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  items: MenuItem[];
  @Input() nodeChanges;
  home: MenuItem;

  ngOnInit() {
    this.items = this.nodeChanges.map((node) => {
      return { label: node.label };
    });
    console.log('Filter', this.items);
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
