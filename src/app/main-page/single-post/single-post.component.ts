import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Posts } from '../main-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() singlepost!: Posts;
  @Output() newpost = new EventEmitter<string>();

  newComment: string = '';

  changeHeart(singlepost: Posts) {
    if (singlepost.isLiked) {
      singlepost.isLiked = false;
      singlepost.likes = singlepost.likes - 1;
    } else {
      singlepost.isLiked = true;
      singlepost.likes = singlepost.likes + 1;
    }
  }

  addNewComment() {
  this.newpost.emit(this.newComment);
  this.newComment = "";
}
}
