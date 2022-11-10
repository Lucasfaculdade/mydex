import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24';
  constructor(
    private http: HttpClient
  ) { }

  get  apiListAllPokemons():Observable<any>{
    return this.http.get(this.url).pipe(
      
      tap((res: any) => res),
      
      tap((res: any) => {
      
        res.results.map( (resPokemons: any) => {
          console.log(resPokemons),
         this.apiGetPokemons(resPokemons.url).subscribe(
          
           (res: any) => resPokemons.status = res,
           (res: any) => resPokemons.sprites = res
      
         )
        }
        )
      })
    )
  }
  public apiGetPokemons(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
