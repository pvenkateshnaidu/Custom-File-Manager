import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Table } from 'primeng/table';
import { MenuItem, PrimeNGConfig, TreeNode } from 'primeng/api';
import { Customer, Representative } from '../customer';
import { CustomerService } from '../customerservice';
import { NodeService } from '../nodeservice.service';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css'],
})
export class TableStructureComponent implements OnInit, OnChanges {
  customers: Customer[];
  @Input('nodeChanges') nodeChanges: any;
  @Input('items') items: MenuItem;

  files1: TreeNode[];
  home: MenuItem;
  cols: any[];
  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig,
    private nodeService: NodeService
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onclickBreadCrumb(event) {
    console.log(event);
  }
  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.nodeService.getLazyFiles().then((files) => (this.files1 = files));
    console.log(this.files1);

    this.cols = [
      { field: 'label', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
