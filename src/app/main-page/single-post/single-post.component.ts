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
  @Output() newpost = new EventEmitter<{ post: Posts; comment: string }>();

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

  addPost() {
    if (this.newComment.trim()) {
      // Nur initialisieren, wenn undefined oder kein Array
      if (!Array.isArray(this.singlepost.comments)) {
        this.singlepost.comments = [];
      }

      console.log(this.newComment);
      this.singlepost.comments.push(this.newComment.trim());
      this.newComment = '';
    }
  }
}
