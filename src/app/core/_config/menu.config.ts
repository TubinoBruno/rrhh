export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Vacaciones',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Solicitudes',
							bullet: 'dot',
							icon: 'flaticon2-group',
							page: '/admin/vacaciones',
						},
					]
				},
				{
					title: 'Organigrama',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Lista de organigramas',
							bullet: 'dot',
							icon: 'fa fa-network-wired',
							page: '/admin/organigrama',
						},
						{
							title: 'Nuevo organigrama',
							bullet: 'dot',
							icon: 'fa fa-plus-square',
							page: '/admin/organigrama/new-org',
						}

					]
				},
				{
					title: 'Agenda',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Gestionar agenda',
							bullet: 'dot',
							icon: 'fa fa-calendar-alt',
							page: '/admin/agenda',
						},
						
					]
				},
			],

		},
		header1: {
			self: {},
			items: [
				{
					title: 'Vacaciones',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Solicitudes',
							bullet: 'dot',
							icon: 'flaticon2-group',
							page: '/admin/vacaciones',
						},
					]
				},
				{
					title: 'Organigrama',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Lista de organigramas',
							bullet: 'dot',
							icon: 'fa fa-network-wired',
							page: '/admin/organigrama',
						},
						{
							title: 'Nuevo organigrama',
							bullet: 'dot',
							icon: 'fa fa-plus-square',
							page: '/admin/organigrama/new-org',
						}

					]
				},
				{
					title: 'Agenda',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Gestionar agenda',
							bullet: 'dot',
							icon: 'fa fa-calendar-alt',
							page: '/admin/agenda',
						},
						
					]
				},
			],

		},
		header2: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					page: '/admin/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Desarrollo profesional',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Cambio de cargo',
							bullet: 'dot',
							icon: 'flaticon2-group',
							page: '/admin/desarrollo/modifcargo'
						},
						{
							title: 'Incremento salarial',
							bullet: 'dot',
							icon: 'flaticon2-group',
							page: '/admin/desarrollo/modifsalario'
						}

					]
				},
				{
					title: 'Reclutamiento',
					root: true,
					subtitle: 'dashboard',
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Nuevo Proceso',
							icon: 'fa fa-user-plus',
							page: '/admin/reclutamiento/proceso-nuevo'
						},
						{
							title: 'Procesos activos',
							icon: 'flaticon2-file-1',
							page: '/admin/reclutamiento/procesos-activos'
						},
						{
							title: 'Procesos cerrados',
							icon: 'flaticon2-file-1',
							page: '/admin/reclutamiento/procesos-cerrados'
						},
						{
							title: 'Inducción',
							icon: 'flaticon2-file-1',
							page: '/admin/reclutamiento/induccion'
						}
					]
				},
				{
					title: 'Evaluaciones',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Clima laboral',
							icon: 'flaticon2-sheet',
							page: '/admin/evaluacion/clima-laboral'
						},
						{
							title: 'Desempeño',
							icon: 'flaticon2-browser',
							page: '/admin/evaluacion/desempeno'
						}
					]
				},
				{
					title: 'Beneficios',
					root: true,
					subtitle: 'dashboard',
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Solicitudes capacitaciones',
							icon: 'flaticon2-file-1',
							page: '/admin/beneficios/solicit-capacitaciones'
						},
						{
							title: 'Solicitudes campañas',
							icon: 'flaticon2-file-1',
							page: '/admin/beneficios/solicit-campanas'
						},
						{
							title: 'Solicitudes beneficios',
							icon: 'flaticon2-file-1',
							page: '/admin/beneficios/solicit-beneficios'
						},
						{
							title: 'Solicitudes préstamos',
							icon: 'flaticon2-file-1',
							page: '/admin/beneficios/solicit-prestamos'
						}
					]
				},
				{
					title: 'Actividades',
					root: true,
					subtitle: 'algo',
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Contratación de servicios',
							icon: 'flaticon2-supermarket',
							page: '/admin/actividad/contrat-servicios'
						},
						{
							title: 'Cumpleañeros',
							icon: 'flaticon2-bell-1',
							page: '/admin/actividad/cumpleaneros'
						},
					]
				},

			],

		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-protection',
					// page: '',
					// ref: 'header2',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Personal',
					root: true,
					alignment: 'left',
					icon: 'flaticon2-list-3',
				},
				{
					title: 'Recursos Humanos',
					root: true,
					icon: 'flaticon2-group',
					page: '/admin/vacaciones',
					ref: 'header1',
					bullet: 'dot',

				},
				{
					title: 'Modulo 3',
					root: true,
					alignment: 'left',
					bullet: 'dot',
					icon: 'flaticon2-hourglass-1',
				},
				{
					title: 'Modulo 4',
					root: true,
					alignment: 'left',
					bullet: 'dot',
					icon: 'flaticon2-analytics-2',
					submenu: []
				},
				{
					title: 'Modulo 5',
					root: true,
					alignment: 'left',
					icon: 'flaticon2-medical-records-1',
				},
				{
					title: 'Module 6',
					root: true,
					icon: 'flaticon2-gear',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 7',
					root: true,
					icon: '',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}

	public user_defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Vacaciones',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Solicitudes vacaciones',
							bullet: 'dot',
							icon: 'fa fa-umbrella-beach',
							page: '/user/usuario-vacaciones'
						},
					]
				},
				
			]
		},
		header2: {
			self: {},
			items: [
				{
					title: 'Vacaciones',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Solicitudes vacaciones',
							bullet: 'dot',
							icon: 'fa fa-umbrella-beach',
							page: '/user/usuario-vacaciones'
						},
					]
				},
				
			]
		},
		header3: {
			self: {},
			items: [
				{
					title: 'Beneficios',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Solicitudes beneficios',
							bullet: 'dot',
							icon: 'flaticon-business',
							page: '/user/beneficios-usuario'
						},
					]
				},
			]
		},

		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					// ref: 'header3',
					icon: 'flaticon2-protection',
					// page: '/user/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',

				},
				{
					title: 'Personal',
					root: true,
					icon : 'flaticon2-list-3',
					// page: '/user/beneficios-usuario',
				},
				{
					title: 'Recursos humanos',
					root: true,
					ref: 'header2',
					icon: 'flaticon2-group',
					page: '/user/usuario-vacaciones',
					bullet: 'dot',
				},
				{
					title: 'Module 3',
					root: true,
					icon: 'flaticon2-hourglass-1',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 4',
					root: true,
					icon: 'flaticon2-analytics-2',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 5',
					root: true,
					icon: 'flaticon2-medical-records-1',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 6',
					root: true,
					icon: 'flaticon2-gear',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 7',
					root: true,
					icon: '',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
			]
		}
	}

	public get user_configs(): any {
		return this.user_defaults;
	}
}
