import { Post } from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService{
  private posts:Post[]=[];
  private postsUpdate = new Subject<Post[]>();

  getPost(){
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdate.asObservable();
  }

  addPost(title:string,content:string){
    const post: Post = {title: title,content: content};
    this.posts.push(post);
    this.postsUpdate.next([...this.posts]);
  }
}
