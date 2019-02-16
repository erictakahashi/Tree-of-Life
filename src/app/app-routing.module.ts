import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './tree/tree.component'
import { TreeNodeComponent } from './tree-node/tree-node.component'

const routes: Routes = [
  { path: '', redirectTo: '/tree', pathMatch: 'full' },
  { path: 'tree', component: TreeComponent },
  { path: 'node/:id', component: TreeNodeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
