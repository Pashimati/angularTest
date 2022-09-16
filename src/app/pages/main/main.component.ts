import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Subscription} from "rxjs";
import {User} from "../../interfaces/user";

interface Count {
  income: number;
  outcome: number
  loan: number
  investment: number
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  subscription: Subscription | undefined
  total: number | undefined
  users: User[] = []

  count: Count = {
    income: 0,
    outcome: 0,
    loan: 0,
    investment: 0
  }


  constructor
  (
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getData()
      .subscribe((res) => {
        this.total = res.total
        this.getCountFields(res.data)
      })
  }

  getCountFields(arr: User[]) {
    arr.forEach((user) => {
      if (user.type === 'income') {
        this.count.income +=1
      } else if (user.type === 'outcome') {
        this.count.outcome +=1
      } else if (user.type === 'loan') {
        this.count.loan +=1
      } else if (user.type === 'investment') {
        this.count.investment +=1
      }
    })
  }

}
