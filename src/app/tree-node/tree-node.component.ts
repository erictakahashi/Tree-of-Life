import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  treeNode: Object;
  subTree: Object;

  constructor(
    private route: ActivatedRoute,
    private treeService: TreeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTreeNode();
  }

  getTreeNode(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.treeService.getTreeNode(id)
      .subscribe((treeNode) => {
        this.treeNode = treeNode;

        // Note: Error when trying to get the subtree
        // Error: The requested subtree is too large to be returned via the API.
        this.getSubTree(id);
      });
  }

  getSubTree(id: string): void {
    this.treeService.getSubTree(id)
      .subscribe(subTree => this.subTree = subTree);
  }

  goBack(): void {
    this.location.back();
  }

}
