import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css'],
})
export class FileManagerComponent implements OnInit {
  nodeChanges: any[] = [];
  constructor() {}

  ngOnInit() {}
  nodeChange($event) {
    this.nodeChanges.push($event);
  }
}
