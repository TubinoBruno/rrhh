import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../core/_base/layout';


@Component({
  selector: 'kt-user-holidays',
  templateUrl: './user-holidays.component.html',
  styleUrls: ['./user-holidays.component.scss']
})

export class UserHolidaysComponent implements OnInit {

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService) {

  }
  ngOnInit() {
  }

}
