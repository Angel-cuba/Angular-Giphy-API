import { HttpClient } from '@angular/common/http';
import { Injectable, Input, computed, signal } from '@angular/core';
import { Datum, GIF } from '../interfaces/gif.interface';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

type GifType = {
  gifs: Datum[];
};

type GType = {
  gif: Datum | any;
};
@Injectable({
  providedIn: 'root',
})
export class GifService {
  url = environment.url;
  apiKey = environment.apiKey;

  #state = signal<GifType>({ gifs: [] });
  #gifstate = signal<GType>({ gif: {} });

  public gifs = computed(() => this.#state().gifs);

  public gif = computed(() => this.#gifstate().gif);

  constructor(private http: HttpClient) {}
  getGifs(value: string) {
    this.http
      .get<GIF[] | any>(`${this.url}api_key=${this.apiKey}&q=${value}`)
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({ gifs: res.data });
      });
  }
  getGifById(id: string, value: string) {
    return this.http
      .get<GIF[] | any>(`${this.url}api_key=${this.apiKey}&q=${value}`)
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#gifstate.set({
          gif: res.data.find((gif: Datum) => gif.id === id),
        });
      });
  }
}
