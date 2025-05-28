import { Component, Input } from '@angular/core';
import { Posts } from '../main-page.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() singlepost!: Posts;

  changeHeart(singlepost: Posts){
    if(singlepost.isLiked){
      singlepost.isLiked = false;
      singlepost.likes = singlepost.likes - 1;
    }else{
       singlepost.isLiked = true;
      singlepost.likes = singlepost.likes + 1;
    }
  }

}
