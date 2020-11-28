import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { console.log("Spotify Service listo") }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQArKg9hgIk6FV2KZTAFukUnwG-8dXfLUdDt7oRsaxd7BRnkjZQsbLMcUT1-CDCLgGEUATarSCdiQ4WbeJk'
    });
     return this.http.get(url, {headers});
  }

  
  
  getNewRelease(){
    
    //const headers = new HttpHeaders({
    //  'Authorization': 'Bearer BQBe3N4UjF5V72zaRqQNu6Lk3vX-zB2L1mDgcgEwuuL8aaumuLg4o0pu8_ZCkppqfNkfyn0ZbItg2TTtOtM'
    //});

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map(data =>data['albums'].items));
    //this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", {headers})
               

  }

  getArtistas( termino: string ){

    //const headers = new HttpHeaders({
    //  'Authorization': 'Bearer BQBe3N4UjF5V72zaRqQNu6Lk3vX-zB2L1mDgcgEwuuL8aaumuLg4o0pu8_ZCkppqfNkfyn0ZbItg2TTtOtM'
    //});

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data =>data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
               
  }

  getArtista( id: string ){

    //const headers = new HttpHeaders({
    //  'Authorization': 'Bearer BQBe3N4UjF5V72zaRqQNu6Lk3vX-zB2L1mDgcgEwuuL8aaumuLg4o0pu8_ZCkppqfNkfyn0ZbItg2TTtOtM'
    //});

    return this.getQuery(`artists/${id}`);
               //.pipe(map(data =>data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
               
  }

  getTopTrack( id: string ){

    //const headers = new HttpHeaders({
    //  'Authorization': 'Bearer BQBe3N4UjF5V72zaRqQNu6Lk3vX-zB2L1mDgcgEwuuL8aaumuLg4o0pu8_ZCkppqfNkfyn0ZbItg2TTtOtM'
    //});

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map(data =>data['tracks']));
    //this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
               
  }

}
