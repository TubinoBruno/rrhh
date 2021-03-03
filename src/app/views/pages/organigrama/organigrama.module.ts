import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';

import { NewOrganigramaComponent } from './new-organigrama/new-organigrama.component';
import { FuncionariosOrganigramaComponent } from './new-organigrama/funcionarios-organigrama/funcionarios-organigrama.component';
import { OrganigramaComponent } from './organigrama.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: OrganigramaComponent
			}, {
				path: 'organigrama',
				redirectTo: '',
				component: OrganigramaComponent
			}, 
      
      
		]),
	],
	providers: [],
	declarations: [
		OrganigramaComponent,
	]
})
export class OrganigramaModule { }
