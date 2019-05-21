import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.scss']
})
export class ProofComponent implements OnInit {

  transactionList: any = null;
  tableColumnList = ["No.","Send","Receive","Amount","Date","Status"];

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.transactionList = this.service.transactionList;
  }

}
