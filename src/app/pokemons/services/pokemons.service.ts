import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokeAPIResponse, Pokemon, SimplePokemon } from '../interfaces';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private http = inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) {
      --page;
    }

    page = Math.max(0, page);

    return this.http
      .get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20`, {
        params: {
          offset: page * 20,
        },
      })
      .pipe(
        map((response) => {
          const simplePokemons: SimplePokemon[] = response.results.map(
            (pokemon) => {
              return {
                id: pokemon.url.split('/').at(-2) ?? '',
                name: pokemon.name,
              };
            }
          );
          return simplePokemons;
        })
      );
  }

  public loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
