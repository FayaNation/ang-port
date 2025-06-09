import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Skills } from './skills';

const routes: Routes = [{ path: '', component: Skills }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
