import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { post } from '../../Classes/postData';
import { PostApis } from '../../services/post-apis';


@Component({
  selector: 'app-post-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css'
})
export class PostForm {
 PostObj:post=new post();
//  PostObj:post=new post();

constructor(private http:HttpClient, private postService:PostApis, private route:Router,  private activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe((res:any)=>{
    console.log(res);
    if(res.id){
      this.http.get( "https://jsonplaceholder.typicode.com/posts/" +res.id).subscribe((res:any)=>{
        this.PostObj=res;
        console.log(res);
        console.log(this.PostObj);

      })
    }
  })
}
listData(){
  this.route.navigateByUrl('api');
 
}
  savePostData(){
    this.postService.createPost(this.PostObj).subscribe((res:any)=>{
      alert("Data save successfully...!");
      })
      }
       reset() {
 this.PostObj= new post();
       }

         updateData(){
    this.postService.updatePost(this.PostObj).subscribe((res:any)=>{
      alert("Data updated successfully...!");
      })
}
}
