import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) { }

  addBlog(blogBody) {
    const blogUrl = 'http://localhost:3000/blogs';
    return this.httpClient.post(blogUrl, blogBody);
  }

  viewBlog(blogId) {
    const blogUrl = 'http://localhost:3000/blog/' + blogId;
    return this.httpClient.get(blogUrl);
  }

  updateBlog(blogId, blogBody) {
    const blogUrl = 'http://localhost:3000/blog/'+ blogId;
    return this.httpClient.put(blogUrl, blogBody);
  }

  deleteBlog(blogId) {
    const blogUrl = 'http://localhost:3000/blog/' + blogId;
    return this.httpClient.delete(blogUrl);
  }

  searchCategoryBlogs(categoryId) {
    const blogUrl = 'http://localhost:3000/blogs/category=' + categoryId;
    return this.httpClient.get(blogUrl);
  }

  searchDateBlogs(dateParam) {
    const blogUrl = 'http://localhost:3000/blogs/date=' + dateParam;
    return this.httpClient.get(blogUrl);
  }
}
