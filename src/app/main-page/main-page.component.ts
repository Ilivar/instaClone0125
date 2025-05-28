

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';


export interface Posts {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  posts: Posts[] = [
    {
      name: 'BananaJoe',
      image: '../assets/img/banana.jpg',
      likes: 22,
      isLiked: true
    },
    {
      name:'BerndDasBrot',
      image: '../assets/img/currant.jpg',
      likes: 42,
      isLiked:false
    }
  ];

  

}
