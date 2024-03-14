import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { FilmQuery } from 'app/Enum/enum';
import { BehaviorSubject, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getAllFilmsRequest$ = new BehaviorSubject(FilmQuery.ALL_FILMS);
  getAllFilms$ = this.getAllFilmsRequest$.pipe(switchMap(request=>this.apollo
    .query({
      query: gql(request),
      variables:{
        offset: 0,
        limit:10
      }
    }).pipe(map((result: any) => result.data.allFilms.films))
    ))
  constructor(private apollo: Apollo) {}
  
}