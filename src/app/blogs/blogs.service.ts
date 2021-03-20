import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) { }

  addBlog(blogBody): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs';
    return this.httpClient.post<Blog>(blogUrl, blogBody);
  }

  viewBlog(blogId): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blog/' + blogId;
    return this.httpClient.get<Blog>(blogUrl);
  }

  updateBlog(blogId, blogBody): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blog/' + blogId;
    return this.httpClient.put<Blog>(blogUrl, blogBody);
  }

  deleteBlog(blogId): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blog/' + blogId;
    return this.httpClient.delete<Blog>(blogUrl);
  }

  searchCategoryBlogs(categoryId): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs/category=' + categoryId;
    return this.httpClient.get<Blog>(blogUrl);
  }

  searchDateBlogs(dateParam): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs/date=' + dateParam;
    return this.httpClient.get<Blog>(blogUrl);
  }
}
