
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WikiService } from '../wiki.service';
import { Page } from '../page.model';

@Component({
    templateUrl: 'pages.html'
})
export class PagesComponent implements OnInit {

    private pages: Page[];

    constructor(private router:Router, private service: WikiService) {}

    ngOnInit(){

      this.service.getPages().subscribe(
        pages => {
          this.pages = pages;
        },
        error => console.log(error)
      );
    }
}