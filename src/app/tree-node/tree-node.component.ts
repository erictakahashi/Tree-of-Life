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
      .subscribe(treeNode => this.treeNode = treeNode);
  }

  goBack(): void {
    this.location.back();
  }

}
