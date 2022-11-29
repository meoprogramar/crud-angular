import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { PostDialogComponent } from 'src/app/shared/post-dialog/post-dialog.component';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
   providers: [PostService],
})
export class HomeComponent {
   @ViewChild(MatTable)
   table!: MatTable<any>;
   displayedColumns: string[] = ['id', 'title', 'actions'];
   posts!: Post[];
   loadingPosts: boolean = false;

   constructor(public dialog: MatDialog, public postService: PostService) {
      this.loadPosts();
   }

   async loadPosts() {
      this.loadingPosts = true;
      this.posts = [];

      try {
         this.posts = await lastValueFrom(this.postService.getAll());
         this.posts = this.posts.slice(0, 5); /* Limita em 10 items */
      } catch (error) {
         console.log('Error');
      } finally {
         this.loadingPosts = false;
      }
   }

   createPost() {
      const dialogRef = this.dialog.open(PostDialogComponent, {
         width: '500px',
         data: {
            userId: 1,
            title: '',
            body: '',
         },
      });

      dialogRef.afterClosed().subscribe(async (result: Post) => {
         if (result) {
            let postAdded: Post;

            try {
               postAdded = await lastValueFrom(this.postService.add(result));
               this.posts.push(postAdded);
               this.table.renderRows();
            } catch (error) {
               console.log('Error');
            }
         }
      });
   }

   editPost(post: Post) {
      const dialogRef = this.dialog.open(PostDialogComponent, {
         width: '500px',
         data: Object.assign({}, post),
      });

      dialogRef.afterClosed().subscribe(async (result: Post) => {
         if (result) {
            let postUpdated: Post;

            try {
               postUpdated = await lastValueFrom(
                  this.postService.update(result, post.id)
               );
               const postIndex = this.posts.findIndex(
                  (item) => item.id === postUpdated.id
               );
               this.posts[postIndex] = postUpdated;
               this.table.renderRows();
            } catch (error) {
               console.log('Error');
            }
         }
      });
   }

   async deletePost(post: Post) {
      try {
         await lastValueFrom(this.postService.remove(post.id || -1));
         const postIndex = this.posts.findIndex((item) => item.id === post.id);
         this.posts.splice(postIndex, 1);
         this.table.renderRows();
      } catch (error) {
         console.log('Error');
      }
   }
}
