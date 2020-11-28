import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any [] = [];
  laodingArtist: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {

    this.laodingArtist = true;

    this.router.params.subscribe(params =>{
      
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);
    });
   }

   getArtista( id: string ){

     this.laodingArtist = true;

     this.spotify.getArtista(id)
         .subscribe(artista =>{
           console.log(artista);
           this.artista = artista;
           this.laodingArtist = false;
         });
   }

   getTopTrack( id: string){
     this.spotify.getTopTrack(id)
         .subscribe(topTracks =>{
           console.log(topTracks);
           this.topTracks = topTracks;
         });
   }


}
