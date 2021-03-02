import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';

import { OrganigramaComponent } from '../organigrama.component';
import { NewOrganigramaComponent } from '../new-organigrama/new-organigrama.component';
import { FuncionariosOrganigramaComponent } from './funcionarios-organigrama/funcionarios-organigrama.component';


@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: NewOrganigramaComponent
			}, {
				path: 'new-org',
				redirectTo: '',
				component: NewOrganigramaComponent
			}, {
				path: 'funcionarios-org',
				component: FuncionariosOrganigramaComponent
			},{
				path: 'organigrama',
				component: OrganigramaComponent
			},
		]),
	],
	providers: [],
	declarations: [
    NewOrganigramaComponent,
		OrganigramaComponent,
		FuncionariosOrganigramaComponent,
	]
})
export class NewOrganigramaModule { }
