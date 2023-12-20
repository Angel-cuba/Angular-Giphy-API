import { HttpClient } from '@angular/common/http';
import { Injectable, Input, computed, signal } from '@angular/core';
import { Datum, GIF } from '../interfaces/gif.interface';
import { Observable, catchError, delay, of } from 'rxjs';
import { environment } from '../../../environments/environment';

type GifType = {
  gifs: Datum[];
};
@Injectable({
  providedIn: 'root',
})
export class GifService {
  url = environment.url;
  apiKey = environment.apiKey;

  #state = signal<GifType>({ gifs: [] });

  public gifs = computed(() => this.#state().gifs);

  constructor(private http: HttpClient) {
  }
  getGifs(value: string) {
    this.http
      .get<GIF[] | any>(`${this.url}api_key=${this.apiKey}&q=${value}`)
       .pipe(delay(1500))
       .subscribe((res) => {
         this.#state.set({ gifs: res.data});
      });
  }
}
