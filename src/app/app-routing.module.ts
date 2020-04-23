import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MemberComponent } from './components/member/member.component';
import { VillageComponent } from './components/village/village.component';
import { CreateComponent } from './components/create/create.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [  
	{ path: '',  redirectTo: '/village', pathMatch: 'full' },
	{ path: 'village', component: VillageComponent },   
	{ path: 'member',  component: MemberComponent },
	{ path: 'create',  component: CreateComponent },  
	{ path: 'login',   component: LoginComponent }, 
	{ path: "**",      component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
