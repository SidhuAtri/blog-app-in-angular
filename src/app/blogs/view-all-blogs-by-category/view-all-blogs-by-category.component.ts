import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-blogs-by-category',
  templateUrl: './view-all-blogs-by-category.component.html',
  styleUrls: ['./view-all-blogs-by-category.component.css']
})
export class ViewAllBlogsByCategoryComponent implements OnInit {

  searchCategory = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchCategory = data.category;
    })
  }

}
