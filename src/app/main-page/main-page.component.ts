

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';


export interface Posts {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
  comments: Array<string>;
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
      isLiked: true,
      comments: ['Ich habe mein Lerntagebuch nicht vergessen!', 'Ich lass mir keinen Code generieren']
    },
    {
      name:'BerndDasBrot',
      image: '../assets/img/currant.jpg',
      likes: 42,
      isLiked:false,
      comments: ['Coden macht oft Kopfweh!', 'aber auch verdammt viel Spaß! :) ']
    }
  ];

  addComment(newComment: string, i: number) {
    this.posts[i].comments.push(newComment);
  }

}
