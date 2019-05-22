import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProofComponent implements OnInit {

  transactionList: any = null;
  tableColumnList = ["No.","Send","Receive","Amount","Date","Status"];
  config: PerfectScrollbarConfigInterface = {
    suppressScrollX: false
  }
  constructor(private service: SharedService) { }

  ngOnInit() {
    this.transactionList = this.service.transactionList;
  }

}
