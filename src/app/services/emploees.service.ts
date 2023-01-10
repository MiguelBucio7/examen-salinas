import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface DataEmployee {
  data: Employee[];
  success: boolean
}

interface Employee {
    id: number,
    name: string,
    last_name: string,
    birthday: number
}

const URL =
  'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/';
@Injectable({
  providedIn: 'root',
})
export class EmploeesService {
  constructor(private http: HttpClient) {}

  getEmploye(nameEmployee: string): Observable<any> {

    const urlWithParams = `${URL}/${nameEmployee}`;
    console.log(urlWithParams);
    return this.http.get<DataEmployee>(`${URL}employees/${nameEmployee}`).pipe(map((data) => {
      return data.data;
    })
    );
  }

  addEmployee(nameEmployee: string, request: { name: string, last_name: string, birthday: number }):Observable<any>{
    return this.http.post(`${URL}/${nameEmployee}`, request).pipe(map((data) => {
      return data;
    })
    );
  }

  getGroupsEmployees(nameEmployee: string): Observable<any> {
    return this.http.get(`${URL}groups/${nameEmployee}`).pipe(map((data) => {
      return data;
    })
    );
  }
  
  getEmployeesByGroup(nameEmployee: string, idGroup:string): Observable<any>{
    return this.http.get(`${URL}employees/getByGroup?id=${idGroup}`).pipe(map((data) => {
      return data;
    })
    );
  }
}
