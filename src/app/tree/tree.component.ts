import { Component, OnInit } from '@angular/core';
import { TreeService } from '../tree.service.js';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  tree: Object;
  subTree: Object;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.getTree();
  }

  getTree(): void {
    this.treeService.getTree()
      .subscribe((tree) => {
        this.tree = tree

        // Note: Error when trying to get the subtree
        // Error: The requested subtree is too large to be returned via the API.
        this.getSubTree(tree.root.node_id);
      });
  }

  getSubTree(id: string): void {
    this.treeService.getSubTree(id)
      .subscribe(subTree => this.subTree = subTree);
  }

}
