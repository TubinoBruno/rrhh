import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var swal : any;

@Component({
  selector: 'kt-cargo-func',
  templateUrl: './cargo-func.component.html',
  styleUrls: ['./cargo-func.component.scss']
})
export class CargoFuncComponent implements OnInit {

  KTBootstrapSelect : any;

  constructor() { }

  ngOnInit() {
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
    var KTSweetAlert2Demo = function () {

      var initSaffiroReclutamiento = function () {

        $('#btn-guardar-proceso').click(function (e) {
          swal.fire({
            title: 'Está seguro?',
            text: "No podrá deshacer esta acción!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, guardar!'
          }).then(function (result) {
            if (result.value) {
              swal.fire(
                'Guardado!',
                'Los datos fueron guardados con éxito.',
                'success'
              )
            }
          });
        });
      };

      return {
        // Init
        init: function () {
          initSaffiroReclutamiento();
        },
      };
    }();

    KTSweetAlert2Demo.init();
  }

}