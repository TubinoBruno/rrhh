import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';
declare var $: any;

@Component({
  selector: 'kt-new-organigrama',
  templateUrl: './new-organigrama.component.html',
  styleUrls: ['./new-organigrama.component.scss']
})
export class NewOrganigramaComponent implements OnInit {

  KTBootstrapSelect: any;

  constructor() {

  }
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
  }

}
