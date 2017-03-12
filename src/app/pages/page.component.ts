import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WikiService } from '../wiki.service';
import { Page } from '../page.model';


@Component({
    templateUrl: 'page.html'
})
export class PageComponent{
    
    private page: Page;
    private title: string;
    private body: string;
    private id: string;
    constructor(private router:Router, activatedRoute: ActivatedRoute, private service: WikiService) {
        let id = activatedRoute.snapshot.params['id'];
        this.service.getPage(id).subscribe(
            page => {
                this.page = page;
                this.title = page.title;
                this.body = page.body;
                this.id = page.id
            },
            error => console.log(error)
        );
    }
}