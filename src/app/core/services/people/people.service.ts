import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { People } from '../../interfaces/people.interface';
import { environment } from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(`${this.baseUrl}/people`)
      .pipe(
        map(response => response

        ))
  }

}
