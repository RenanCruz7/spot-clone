import { Component } from '@angular/core';
import Album from '../../interfaces/Album';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  lista = ["Playlist", "Artists", "Albums", "Podcasts"];	
  musics: Album[] = [
    {
      nomeDoAlbum: "23",
      nomeDoArtista: "Cental Cee",
      coverDoAlbum: "../../../assets/23.jpg"
    },
    {
      nomeDoAlbum: "Wild West",
      nomeDoArtista: "Central Cee",
      coverDoAlbum: "../../../assets/wildWest.jpg"
    },
    {
      nomeDoAlbum: "21",
      nomeDoArtista: "Adele",
      coverDoAlbum: "../../../assets/adele.jpg"
    },
    {
      nomeDoAlbum: "Meteora",
      nomeDoArtista: "Linkin Park",
      coverDoAlbum: "../../../assets/meteora.jpg"
    },
    {
      nomeDoAlbum: "Hybrid Theory",
      nomeDoArtista: "Linkin Park",
      coverDoAlbum: "../../../assets/Hybrid.jpg"
    },
    {
      nomeDoAlbum: "No More Leaks",
      nomeDoArtista: "Central Cee",
      coverDoAlbum: "../../../assets/noMore.png"
    },
    {
      nomeDoAlbum: "Imaterial",
      nomeDoArtista: "Filipe Ret",
      coverDoAlbum: "../../../assets/ret.jpg"
    },
    {
      nomeDoAlbum: "Eu ainda tenho coração",
      nomeDoArtista: "Leall",
      coverDoAlbum: "../../../assets/leall.jpeg"
    },
    {
      nomeDoAlbum: "Jesus is King",
      nomeDoArtista: "Kanye West",
      coverDoAlbum: "../../../assets/jesus.jpg"
    },
    {
      nomeDoAlbum: "Blonde",
      nomeDoArtista: "Frank Ocean",
      coverDoAlbum: "../../../assets/blonde.jpg"
    },
    {
      nomeDoAlbum: "Blonde",
      nomeDoArtista: "Frank Ocean",
      coverDoAlbum: "../../../assets/blonde.jpg"
    },
    {
      nomeDoAlbum: "Blonde",
      nomeDoArtista: "Frank Ocean",
      coverDoAlbum: "../../../assets/blonde.jpg"
    },
    {
      nomeDoAlbum: "Blonde",
      nomeDoArtista: "Frank Ocean",
      coverDoAlbum: "../../../assets/blonde.jpg"
    },
    {
      nomeDoAlbum: "Blonde",
      nomeDoArtista: "Frank Ocean",
      coverDoAlbum: "../../../assets/blonde.jpg"
    },
    
  ];
  constructor() { }
}
