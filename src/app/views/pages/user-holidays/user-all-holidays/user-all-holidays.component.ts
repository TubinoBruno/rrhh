import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { Router, ActivatedRoute } from '@angular/router';

let g_router;

declare var $: any;

@Component({
  selector: 'kt-user-all-holidays',
  templateUrl: './user-all-holidays.component.html',
  styleUrls: ['./user-all-holidays.component.scss']
})
export class UserAllHolidaysComponent implements OnInit {

  KTDatatableModal1: any;
  KTBootstrapSelect: any;

  constructor( private serviceU: DataTableService, private router: Router) {
    g_router = router;

  }

  ngOnInit() {
    this.initTable1();

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
  initTable1() {

    this.serviceU.getSolicitudesPendientesUser().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteVacaciones = function () {
          var el = $('#tabla-historial-vacaciones');
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
										<a class="kt-link link-num">` + row.cod_empleado + `</a>
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
              }, 
                {
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
              },{
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
}


