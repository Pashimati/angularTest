import { Injectable } from '@angular/core';
import {User, UserData} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient

  ) { }

  getData() {
    return this.http.get<UserData>('assets/data/employees.json')
  }
}

