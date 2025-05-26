
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Posts {
  name: string;
  image: string;
  likes: number;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  posts: Posts[] = [
    {
      name: 'BananaJoe',
      image: '../assets/img/banana.jpg',
      likes: 22,
    },
    {
      name:'BerndDasBrot',
      image: '../assets/img/currant.jpg',
      likes: 42
    }
  ];
}
