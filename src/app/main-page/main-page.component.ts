

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Posts {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
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
      isLiked: true
    },
    {
      name:'BerndDasBrot',
      image: '../assets/img/currant.jpg',
      likes: 42,
      isLiked:false
    }
  ];

  changeHeart(post: Posts){
    if(post.isLiked){
      post.isLiked = false;
      post.likes = post.likes - 1;
    }else{
       post.isLiked = true;
      post.likes = post.likes + 1;
    }
  }

}
