import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
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

  #state = signal<GifType>({ gifs: [] });

  public gifs = computed(() => this.#state().gifs);

  constructor(private http: HttpClient) {
    this.getGifs();
  }
  getGifs() {
    this.http
      .get<GIF>(this.url)
      .pipe(delay(1500))
      .subscribe((res) => {
        console.log("🚀 ~ file: gif.service.ts:26 ~ GifService ~ .subscribe ~ res:", res)
        this.#state.set({ gifs: res.data });
      });
  }
}
