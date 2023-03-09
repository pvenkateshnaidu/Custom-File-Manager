import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css'],
})
export class FileManagerComponent implements OnInit {
  nodeChanges: any[] = [];
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit() {}
  nodeChange($event) {
    this.nodeChanges.push($event);
    this.items = this.nodeChanges.map((f) => {
      return { label: f.label };
    });
  }
}
