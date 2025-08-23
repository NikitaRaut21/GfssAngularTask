import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostApis } from '../../services/post-apis';
import { Table } from '../../reusableCoponents/table/table';
import { post } from '../../Classes/postData';
import { Ipost } from '../../Interface/Ipost';
import { Router } from '@angular/router';




@Component({
  selector: 'app-api-integration',
standalone: true,
  imports: [CommonModule,FormsModule,Table],
  templateUrl: './api-integration.html',
  styleUrl: './api-integration.css'
})
export class ApiIntegration {
headingArray:any[]=['title','body']
postList:Ipost[]=[];
  // postList: IPost[] = [];
// postList: any[] = [];
 PostObj:post=new post();
//  postObj: any = {
//     userId: 0,
//     id: 0,
//     title: "",
//     body: ""
//   }

  constructor(private http:HttpClient, private postService:PostApis,private router:Router) {
    this.getAllDetails();
  }

// newData(){
//   this.router.navigateByUrl('pform');
// }
newData() {
  this.router.navigate(['pform']);
}


  // getAllDetails() {
  //   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
  //     this.postList = res;
  //     console.log(this.postList);
  //   })
  // }
    getAllDetails(){
      this.postService.getAll().subscribe((res: any) => {
        this.postList = res;
        console.log(this.postList);
      })
    }

  deleteRecord(id: any) {
    const isDelete = confirm("Are you sure want to delete?");
    if (isDelete) {
      this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id).subscribe((res: any) => {
        alert("Deleted Suucessfully");
      })
    } else {
      alert("something error");
    }

  }
  // savePostData(){
  //   this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe((res:any)=>{
  //  alert("Data save successfully...!");
  //   })
  // }
  savePostData(){
    this.postService.createPost(this.PostObj).subscribe((res:any)=>{
      alert("Data save successfully...!");
      })
      }
//  reset() {
//     this.postObj = {
//       userId: 0,
//       id: 0,
//       title: "",
//       body: ""
//     }
//   }
reset() {
  this.PostObj= new post();
}
  // editData(list:any){
  //   this.PostObj = list;
  //   console.log(list)
  // }
  editData(id:number){
    this.router.navigate(['pform',id]);
  }
  
  // updateData(){
  //   this.http.post("https://jsonplaceholder.typicode.com/posts/1", this.postObj).subscribe((res:any)=>{
  //     alert("Data updated successfully...!");
  //   })
  // }
  updateData(){
    this.postService.updatePost(this.PostObj).subscribe((res:any)=>{
      alert("Data updated successfully...!");
      })
}
}
