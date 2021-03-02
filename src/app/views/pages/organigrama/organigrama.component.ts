import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../core/_base/layout';
declare var $: any;
@Component({
  selector: 'kt-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.scss']
})
export class OrganigramaComponent implements OnInit {

  KTDatatableModal1: any;

  KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService) {

  }
  ngOnInit() {
    this.initTable2();
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
  initTable2() {
    this.service.getAllOrganigrama().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteOrganigrama = function () {
          var el = $('#tabla-organigramas');
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
                field: 'cod_organigrama',
                title: 'Cod Organigrama',
                width: 90,
                template: function (row) {
                  var output;
                  output = `
										<a class="kt-link link-num details" >` + row.cod_organigrama + `</a>`;
                  return output;
                },
              }, {
                field: 'nom_creador',
                title: 'Nombre creador',
              }, {
                field: 'cargo_creador',
                title: 'Cargo creador',
              }, {
                field: 'cargo_empleado',
                title: 'Cargo empleado',
              }, {
                field: 'vigencia_fiscal',
                title: 'Vigencia fiscal',
              }, {
                field: 'fecha_creacion',
                title: 'Fecha creación',
                width: 90,
              }, {
                field: 'estado',
                title: 'Estado',
                template: function (row) {
                  if (row.estado == 'Activo') {
                    status = 'kt-badge--danger';
                  } 
                    // status = 'kt-badge--success';
                   else if (row.estado == 'Inactivo') {
                    status = 'kt-badge--warning';
                  } else {
                    return row.estado;
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill">' + row.estado + '</span>';
                },
              }, 
            ],
          });

        };
        return {
          // public functions
          init: function () {

            subRemoteOrganigrama();

          }
        };
      }();
      this.KTDatatableModal1.init();
    });
  }
}
