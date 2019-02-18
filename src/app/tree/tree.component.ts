import { Component, OnInit } from '@angular/core';
import { TreeService } from '../tree.service.js';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  tree: Object;
  loading = false;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.getTree();
  }

  getTree(): void {
    this.loading = true;
    this.treeService.getTree()
      .subscribe((tree) => {
        this.loading = false;
        this.tree = tree;
      });
  }

  getTooltipData(treeNode: any): string {
    return `Name: ${treeNode.name} \n  Ott ID: ${treeNode.ott_id} \n  Rank: ${treeNode.rank}`;
  }

}
