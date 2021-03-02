import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { DiaryComponent } from './diary.component';

import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: DiaryComponent
			}, {
				path: 'agenda',
				redirectTo: '',
				component: DiaryComponent
			}, 
      
		]),
	],
	providers: [],
	declarations: [
		DiaryComponent,
		
	]
})
export class DiaryModule { }
