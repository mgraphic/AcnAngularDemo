import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Case } from './case';
import { CaseService } from './case.service';

@Component({
  selector: 'my-cases',
  templateUrl: './cases.component.html',
})
export class CasesComponent implements OnInit {
  cases: Case[];

  constructor(
    private caseService: CaseService) { }

  getCases(): void {
    this.caseService
        .getCases()
        .then(cases => this.cases = cases);
    console.log(this.cases);
  }

  ngOnInit(): void {
    this.getCases();
  }

  getStatusClassString(status: string): string {
    if (status == 'Completed') {
      return 'status-key status-completed glyphicon glyphicon-ok-sign';
    } else if (status == 'InProgress') {
      return 'status-key status-progress glyphicon glyphicon-info-sign';
    } else if (status == 'ActionNeeded') {
      return 'status-key status-action glyphicon glyphicon-remove-sign';
    }
  }
}
