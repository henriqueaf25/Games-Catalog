import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IGames } from '../../interfaces/games.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  listGames(): Promise<IGames> {
    return lastValueFrom(
      this.http.get<IGames>('https://api-labs.tindin.com.br/games')
    );
  }

  getGame(id: string): Promise<any> {
    return lastValueFrom(
      this.http.get(`https://api-labs.tindin.com.br/games/${id}`)
    );
  }
}
