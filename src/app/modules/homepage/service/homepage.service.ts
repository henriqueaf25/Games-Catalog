import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { IGames } from 'src/app/modules/interfaces/games.interface';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private http: HttpClient) {}

  listGames(): Promise<IGames[]> {
    return lastValueFrom(
      this.http.get<IGames[]>('https://api-labs.tindin.com.br/games')
    );
  }
}
