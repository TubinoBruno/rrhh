import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserHolidaysComponent } from './user-holidays.component';

import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { UserAllHolidaysComponent } from './user-all-holidays/user-all-holidays.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: UserHolidaysComponent
			}, {
				path: 'holiday',
				redirectTo: '',
				component: UserHolidaysComponent
			}, {
				path: 'holiday-all',
				component: UserAllHolidaysComponent
			},
		]),
	],
	providers: [],
	declarations: [
		UserHolidaysComponent,
		UserAllHolidaysComponent,
	]
})
export class UserHolidaysModule { }




