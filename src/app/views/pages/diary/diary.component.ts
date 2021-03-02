import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

declare var $: any;
declare var Ev: any;

@Component({
	selector: 'kt-diary',
	templateUrl: './diary.component.html',
	styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
	KTBootstrapSelect: any;

	@ViewChild('chart2', { static: true }) chart2: ElementRef;

	constructor(private layoutConfigService: LayoutConfigService) {

	}

	ngOnInit() {
		this.initChart2();
		this.KTBootstrapSelect = function () {

			// Private functions
			var demos = function () {
				// minimum setup
				$('.kt-selectpicker').selectpicker();
			}

			return {
				// public functions
				init: function () {
					demos();
				}
			};
		}();
		this.KTBootstrapSelect.init();
	}

	initChart2() {
		var el = $('#evo-calendar');

		el.evoCalendar({
			language: 'es',
			theme: 'default',
			format: "dd MM, yyyy",
			eventHeaderFormat: 'd MM, yyyy',
			firstDayOfWeek: 1,
			todayHighlight: true,
			calendarEvents: [
				{
					id: 'bHay68s', // Event's ID (required)
					name: "Reunión de coordinación", // Event name (required)
					date: "January/1/2021", // Event date (required)
					type: "event", // Event type (required)
					description: "Reunión del equipo de RRHH para planificar evaluaciones del año.",
					everyYear: true // Same event every year (optional)
				},
				{
					name: "Evaluación de desempeño",
					//badge: "13Feb - 15Feb", // Event badge (optional)
					date: ["February/13/2021", "February/15/2021"], // Date range
					description: "Evaluación de desempeño del área Administración.", // Event description (optional)
					type: "event",
					color: "#63d867" // Event custom color (optional)
				},
				{
					name: "Planificación anual 2021",
					//badge: "8:00 - 10:00", // Event badge (optional)
					date: "February/18/2021", // Date range
					description: "Planificación anual de RRHH con todo el equipo.", // Event description (optional)
					type: "event",
					color: "#3686fb" // Event custom color (optional)
				},
				{
					name: "Reunión con Gerencia",
					//badge: "15:00 - 16:00", // Event badge (optional)
					date: "February/18/2021", // Date range
					description: "Aprobación de planificación anual.", // Event description (optional)
					type: "holiday",
					color: "#3686fb" // Event custom color (optional)
				}
			]

		})
	}
}
