import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { User } from "../../interfaces/user";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})


export class TableComponent implements OnInit,
  DoCheck, OnDestroy {

  employees: User[] = []
  filteredEmployees: User[] = []
  filterText: string = 'income'

  subscription: Subscription | undefined
  constructor
  (
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.subscription = this.dataService.getData()
      .subscribe((res) => {
        this.employees = res.data
      });
    this.getParams()
  }

  ngDoCheck() {
    this.filter(this.filterText)
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }



  getParams() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.filterText = Object.keys(params)[0]
      });
  }

  filter(filter: string): void {
    this.filteredEmployees = this.employees.filter((user: User) => user.type === filter)
  }
}
