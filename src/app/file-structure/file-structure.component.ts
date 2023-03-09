import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { NodeService } from '../nodeservice.service';
@Component({
  selector: 'app-file-structure',
  templateUrl: './file-structure.component.html',
  styleUrls: ['./file-structure.component.css'],
  providers: [MessageService],
})
export class FileStructureComponent implements OnInit {
  files: TreeNode[];
  @Output() shareData: EventEmitter<any> = new EventEmitter();
  loading: boolean;

  constructor(
    private nodeService: NodeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.nodeService.getLazyFiles().then((files) => (this.files = files));
      this.loading = false;
    }, 1000);
  }

  nodeExpand(event) {
    if (event.node) {
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.nodeService.getLazyFiles().then((nodes) => {
        this.shareData.emit(event.node);

        event.node.children = nodes;
        this.messageService.add({
          severity: 'info',
          summary: 'Children Loaded',
          detail: event.node.label,
        });
      });
    }
  }
}
