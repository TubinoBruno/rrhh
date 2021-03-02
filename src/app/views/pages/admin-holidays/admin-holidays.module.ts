import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminHolidaysComponent } from './admin-holidays.component';

// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';


@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: AdminHolidaysComponent
			},{
				path: 'holiday-all',
        		redirectTo: '',
				component: AdminHolidaysComponent
			},{
				path: 'holiday-details',
				component: HolidayDetailsComponent
			},
		]),
	],
	providers: [],
	declarations: [
		AdminHolidaysComponent,
		HolidayDetailsComponent,
	]
})
export class AdminHolidaysModule { }
