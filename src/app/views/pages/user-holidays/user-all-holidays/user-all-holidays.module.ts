import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserAllHolidaysComponent } from './user-all-holidays.component';

// import { PartialsModule } from 'src/app/views/partials/partials.module';
// import { CoreModule } from 'src/app/core/core.module';
import { UserHolidaysComponent } from '../user-holidays.component';


@NgModule({
	imports: [
		CommonModule,
		// PartialsModule,
		// CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: UserHolidaysComponent
			}, {
				path: 'holiday',
				redirectTo: '',
				component: UserHolidaysComponent
			}, {
				path: '.holiday-all',
				component: UserAllHolidaysComponent
			},
		]),
	],
	providers: [],
	declarations: [
		UserAllHolidaysComponent,
		UserHolidaysComponent,
	]
})
export class UserAllHolidaysModule { }
