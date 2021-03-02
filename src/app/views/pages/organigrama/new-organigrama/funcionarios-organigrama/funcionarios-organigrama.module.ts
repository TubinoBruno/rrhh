import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


// Core Module
import { CoreModule } from '../../../../../core/core.module';
import { PartialsModule } from '../../../../partials/partials.module';

import { NewOrganigramaComponent } from '../../new-organigrama/new-organigrama.component';
import { FuncionariosOrganigramaComponent } from '../funcionarios-organigrama/funcionarios-organigrama.component';
import { OrganigramaComponent } from '../../organigrama.component';


@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: FuncionariosOrganigramaComponent
			}, {
				path: 'funcionarios-org',
				redirectTo: '',
				component: FuncionariosOrganigramaComponent
			}, {
				path: 'organigrama',
				component: OrganigramaComponent
			},{
				path: 'new-org',
				component: NewOrganigramaComponent
			},
		]),
	],
	providers: [],
	declarations: [
    FuncionariosOrganigramaComponent,
    NewOrganigramaComponent,
		OrganigramaComponent,
	]
})
export class FuncionariosOrganigramaModule { }
