import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../../core/_base/layout';
declare var $: any;
@Component({
  selector: 'kt-funcionarios-organigrama',
  templateUrl: './funcionarios-organigrama.component.html',
  styleUrls: ['./funcionarios-organigrama.component.scss']
})
export class FuncionariosOrganigramaComponent implements OnInit {

  KTDatatableModal1: any;

  KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService) {

  }
  ngOnInit() {
    this.initTable();
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
  initTable() {
    this.service.getAllFuncionariosOrganigrama().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteFuncionariosOrg = function () {
          var el = $('#tabla-funcionarios-organigrama');
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
          
            columns: [
              {
                field: 'nom_funcionario',
                title: 'Nombre Funcionario',
                
              }, {
                field: 'cargo_funcionario',
                title: 'Cargo Funcionario',
              }, {
                field: 'nom_superior',
                title: 'Nombre Superior',
              }, {
                field: 'cargo_superior',
                title: 'Cargo Superior',
              }, {
                field: 'empresa',
                title: 'Empresa',
              }, 
              {
                field: 'unidad_negocio',
                title: 'Unidad de Negocio',
              },
              {
                field: 'area',
                title: 'Área',
                width: 90,
              }, {
                field: 'salario',
                title: 'Salario',
              }, {
                field: 'nivel',
                title: 'Nivel',
              }, {
                field: 'categoria',
                title: 'Categoría',
              },
              {
                field: 'monto_c',
                title: 'Monto C',
              }, {
                field: 'monto_b',
                title: 'Monto B',
              }, {
                field: 'monto_a',
                title: 'Monto A',
              }, {
                field: 'moneda',
                title: 'Moneda',
              },
              {
                field: 'tipo_planilla',
                title: 'Tipo Planilla',
              },
              {
                field: 'tipo_funcionario',
                title: 'Tipo Funcionario',
              },
              
            ],
          });

        };
        return {
          // public functions
          init: function () {

            subRemoteFuncionariosOrg();

          }
        };
      }();
      this.KTDatatableModal1.init();
    });
  }
}
