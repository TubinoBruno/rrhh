import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../core/_base/layout';
import { Router, ActivatedRoute } from '@angular/router';
let g_router;

declare var $: any;


@Component({
  selector: 'kt-admin-holidays',
  templateUrl: './admin-holidays.component.html',
  styleUrls: ['./admin-holidays.component.scss']
})
export class AdminHolidaysComponent implements OnInit {

  KTDatatableModal1: any;
  KTDatatableModal2: any;

  KTBootstrapSelect: any;
  @ViewChild('chart3', { static: true }) chart3: ElementRef;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;

  }
  ngOnInit() {
    this.initTable1();
    this.initTable2();
    this.initChart3();

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
    initEvents();
    initEvents2();

  }
  initTable1() {
    this.service.getSolicitudesPendientes().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteVacaciones = function () {
          var el = $('#tabla-solicit-vacaciones-pendientes');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',		//remote if real url is provided
              source: {
                data: res['data']
              },
              pageSize: 10,
              //serverPaging: true,
              //serverFiltering: false,
              //serverSorting: true,
            },

            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
            },

            // column sorting
            sortable: true,

            pagination: true,



            // columns definition
            columns: [
              {
                field: 'cod_empleado',
                title: 'Cod Empleado',
                width: 90,
                template: function (row) {
                  var output;
                  output = `
										<a class="kt-link link-num detalles">` + row.cod_empleado + `</a>
									`;
                  return output;
                },
              }, {
                field: 'nom_empleado',
                title: 'Nombre empleado',
              }, {
                field: 'ci_empleado',
                title: 'CI empleado',
              }, {
                field: 'cargo_empleado',
                title: 'Cargo empleado',
              }, {
                field: 'fecha_ini',
                title: 'Fecha Ini',
              }, {
                field: 'fecha_fin',
                title: 'Fecha Fin',
                width: 90,
              }, {
                field: 'estado',
                title: 'Estado',
                template: function (row) {
                  if (row.estado == 'Aprobado') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Ingresado') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else {
                    return row.estado;
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }, {
                field: 'centro_costo',
                title: 'Centro Costo',
              }, {
                field: 'jornada',
                title: 'Jornada',
              }, {
                field: 'total_dias',
                title: 'Total días',
              }, {
                field: 'fecha_reinc',
                title: 'Fecha Reincorp',
              }, {
                field: 'dias_planif',
                title: 'Dias Panificados',
              }, {
                field: 'saldo_dias',
                title: 'Saldo vacación',
              }
            ],
          });

        };
        return {
          // public functions
          init: function () {

            subRemoteVacaciones();
          }
        };
      }();
      this.KTDatatableModal1.init();
    });
  }
  initTable2() {
    this.service.getAllSolicitudes().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteVacaciones = function () {
          var el = $('#tabla-solicit-vacaciones-todas');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',		//remote if real url is provided
              source: {
                data: res['data']
              },
              pageSize: 10,
              //serverPaging: true,
              //serverFiltering: false,
              //serverSorting: true,
            },

            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
              input: $('#generalSearch')
            },

            // columns definition
            columns: [
              {
                field: 'cod_empleado',
                title: 'Cod Empleado',
                width: 90,
                template: function (row) {
                  var output;
                  output = `
										<a class="kt-link link-num details" >` + row.cod_empleado + `</a>`;
                  return output;
                },
              }, {
                field: 'nom_empleado',
                title: 'Nombre empleado',
              }, {
                field: 'ci_empleado',
                title: 'CI empleado',
              }, {
                field: 'cargo_empleado',
                title: 'Cargo empleado',
              }, {
                field: 'fecha_ini',
                title: 'Fecha Ini',
              }, {
                field: 'fecha_fin',
                title: 'Fecha Fin',
                width: 90,
              }, {
                field: 'estado',
                title: 'Estado',
                template: function (row) {
                  if (row.estado == 'Aprobado') {
                    status = 'kt-badge--success';
                  } else if (row.estado == 'Ingresado') {
                    status = 'kt-badge--warning';
                  } else if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else {
                    return row.estado;
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }, {
                field: 'centro_costo',
                title: 'Centro Costo',
              }, {
                field: 'jornada',
                title: 'Jornada',
              }, {
                field: 'total_dias',
                title: 'Total días',
              },
              {
                field: 'fecha_ini',
                title: 'Fecha Ini',
              }, {
                field: 'fecha_reinc',
                title: 'Fecha Reincorp',
              }, {
                field: 'dias_planif',
                title: 'Dias Panificados',
              }, {
                field: 'saldo_dias',
                title: 'Monto indemnización',
              }
            ],
          });

        };
        return {
          // public functions
          init: function () {

            subRemoteVacaciones();

          }
        };
      }();
      this.KTDatatableModal1.init();
    });
  }
  initChart3() {

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function getRandomTimeStamps(min, max, fromDate) {
      var return_list = [];

      var entries = randomInt(min, max);
      for (var i = 0; i < entries; i++) {
        var day = fromDate ? new Date(fromDate.getTime()) : new Date();

        //Genrate random
        var previous_date = randomInt(0, 365);
        if (!fromDate) {
          previous_date = - previous_date;
        }
        day.setDate(day.getDate() + previous_date);

        return_list.push(day.getTime());
      }

      return return_list;

    };
    // var subRemoteHeatCalendar = new Chart(this.chart3.nativeElement, {
    var el = $('#heat-calendar');
    el.sub


    var start_from_2021 = new Date(2021, 0, 0, 0, 0, 0);
    el.github_graph({
      //Generate random entries from 50-> 200 entries
      start_date: start_from_2021,
      data: getRandomTimeStamps(50, 120, start_from_2021),
      texts: ['Vacación', 'Vacaciones'],
      month_names: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      h_days: ['Lun', 'Mie', 'Vie'],
    });






  }

}

function initEvents() {
  $('#tabla-solicit-vacaciones-todas').on('click', 'a.details', function () {
    g_router.navigate(['/admin/vacaciones/holiday-details']);
  });
}
function initEvents2() {
  $('#tabla-solicit-vacaciones-pendientes').on('click', 'a.detalles', function () {
    g_router.navigate(['/admin/vacaciones/holiday-details']);
  });
}

