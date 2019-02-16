import { Component, OnInit } from '@angular/core';
import { TreeService } from '../tree.service.js';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  tree: Object[];

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.getTree();
  }

  getTree(): void {
    this.treeService.getTree()
      .subscribe(tree => this.tree = tree);
  }

}
