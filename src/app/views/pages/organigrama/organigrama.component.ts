import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../core/_base/layout';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
declare var kendo: any;
let g_router;

@Component({
  selector: 'kt-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.scss']
})
export class OrganigramaComponent implements OnInit {
  KTDatatableModal1: any;

  KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;

  }
  ngOnInit() {
    this.initTable2();
    this.click(1);
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
                
              }, {
                field: 'nom_creador',
                title: 'Nombre creador',
              }, {
                field: 'cargo_creador',
                title: 'Cargo creador',
              }, {
                field: 'vigencia_fiscal',
                title: 'Vigencia fiscal',
              }, {
                field: 'fecha_creacion',
                title: 'Fecha creación',
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
  click(params: any) {
    $('#tabla-organigramas').on('click', 'tr.kt-datatable__row', function (e) {
      //$('#fecha_ausen').val( datatable.getRecord(this).getColumn('fecha').getValue() );
      var data = $(e.currentTarget).data('obj');
      //console.log(data); // pass it into your inputs
      var estado = data.estado;
      if (estado == "Activo") {
        createDiagram1();
      } else if (estado == "Inactivo") {
        createDiagram2();
      } else {
        $('#diagram').empty();
      }

    });

    var data1 = [{
      firstName: "Antonio",
      lastName: "Moreno",
      image: "10007.jpg",
      title: "Team Lead",
      colorScheme: "#1696d3",
      items: [{
        firstName: "Elizabeth",
        image: "10001.jpg",
        lastName: "Brown",
        title: "Design Lead",
        colorScheme: "#ef6944",
        items: [{
          firstName: "Ann",
          lastName: "Devon",
          image: "10006.jpg",
          title: "UI Designer",
          colorScheme: "#ef6944"
        }]
      }, {
        firstName: "Diego",
        lastName: "Roel",
        image: "10002.jpg",
        title: "QA Engineer",
        colorScheme: "#ee587b",
        items: [{
          firstName: "Fran",
          lastName: "Wilson",
          image: "10005.jpg",
          title: "QA Intern",
          colorScheme: "#ee587b"
        }]
      }, {
        firstName: "Felipe",
        lastName: "Izquiedro",
        image: "10003.jpg",
        title: "Senior Developer",
        colorScheme: "#75be16",
        items: [{
          firstName: "Daniel",
          lastName: "Tonini",
          image: "10004.jpg",
          title: "Developer",
          colorScheme: "#75be16"
        }]
      }]
    }];

    var data2 = [{
      firstName: "Antonio",
      lastName: "Moreno",
      image: "10001.jpg",
      title: "Team Lead",
      colorScheme: "#1696d3",
      items: [{
        firstName: "Elizabeth",
        image: "10007.jpg",
        lastName: "Brown",
        title: "Design Lead",
        colorScheme: "#ef6944",
        items: [{
          firstName: "Ann",
          lastName: "Devon",
          image: "10006.jpg",
          title: "UI Designer",
          colorScheme: "#ef6944"
        }]
      }, {
        firstName: "Diego",
        lastName: "Roel",
        image: "10005.jpg",
        title: "QA Engineer",
        colorScheme: "#ee587b",
        items: [{
          firstName: "Fran",
          lastName: "Wilson",
          image: "10002.jpg",
          title: "QA Intern",
          colorScheme: "#ee587b"
        }]
      }, {
        firstName: "Felipe",
        lastName: "Izquiedro",
        image: "10003.jpg",
        title: "Senior Developer",
        colorScheme: "#75be16",
        items: [{
          firstName: "Daniel",
          lastName: "Tonini",
          image: "10004.jpg",
          title: "Developer",
          colorScheme: "#75be16"
        }]
      }]
    }];

    function visualTemplate1(options) {
      var dataviz = kendo.dataviz;
      var g = new dataviz.diagram.Group();
      var dataItem = options.dataItem;

      g.append(new dataviz.diagram.Rectangle({
        width: 210,
        height: 75,
        stroke: {
          width: 0
        },
        fill: "#46CE61",
      }));

      g.append(new dataviz.diagram.TextBlock({
        text: dataItem.firstName + " " + dataItem.lastName,
        x: 85,
        y: 20,
        fill: "#fff"
      }));

      g.append(new dataviz.diagram.TextBlock({
        text: dataItem.title,
        x: 85,
        y: 40,
        fill: "#fff"
      }));

      g.append(new dataviz.diagram.Image({
        source: "../../../assets/funcionarios/" + dataItem.image,
        x: 3,
        y: 3,
        width: 68,
        height: 68
      }));

      return g;
    }

    function visualTemplate2(options) {
      var dataviz = kendo.dataviz;
      var g = new dataviz.diagram.Group();
      var dataItem = options.dataItem;

      g.append(new dataviz.diagram.Rectangle({
        width: 210,
        height: 75,
        stroke: {
          width: 0
        },
        fill: "#3000AA",
      }));

      g.append(new dataviz.diagram.TextBlock({
        text: dataItem.firstName + " " + dataItem.lastName,
        x: 85,
        y: 20,
        fill: "#fff"
      }));

      g.append(new dataviz.diagram.TextBlock({
        text: dataItem.title,
        x: 85,
        y: 40,
        fill: "#fff"
      }));

      g.append(new dataviz.diagram.Image({
        source: "../../../assets/funcionarios/" + dataItem.image,
        x: 3,
        y: 3,
        width: 68,
        height: 68
      }));

      return g;
    }

    function createDiagram1 () {
      var el = $('#diagram');

      el.kendoDiagram({
        zoomRate: 0,
        dataSource: new kendo.data.HierarchicalDataSource({
          data: data1,
          schema: {
            model: {
              children: "items"
            }
          }
        }),
        layout: {
          type: "layered"
        },
        shapeDefaults: {
          visual: visualTemplate1
        },
        connectionDefaults: {
          stroke: {
            color: "#979797",
            width: 2
          }
        }
      });

      var diagram = $("#diagram").getKendoDiagram();
      diagram.bringIntoView(diagram.shapes);
    }

    function createDiagram2 () {
      var el = $('#diagram');

      el.kendoDiagram({
        zoomRate: 0,
        dataSource: new kendo.data.HierarchicalDataSource({
          data: data2,
          schema: {
            model: {
              children: "items"
            }
          }
        }),
        layout: {
          type: "layered"
        },
        shapeDefaults: {
          visual: visualTemplate2
        },
        connectionDefaults: {
          stroke: {
            color: "#979797",
            width: 2
          }
        }
      });

      var diagram = $("#diagram").getKendoDiagram();
      diagram.bringIntoView(diagram.shapes);
    };

  }


}
function initEvents() {
  $('#nuevoorg').on('click', 'a.nuevoorg', function () {
    g_router.navigate(['/admin/new-org']);
  });
}