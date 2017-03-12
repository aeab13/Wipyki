import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WikiService } from '../wiki.service';
import { Page } from '../page.model';


@Component({
    templateUrl: 'edit_page.html'
})
export class EditPageComponent{
    page: Page;
    title: string;
    body: string;
    id: number;
    constructor(private router:Router, activatedRoute: ActivatedRoute, private service: WikiService, private location: Location) {
        let id = activatedRoute.snapshot.params['id'];
        this.service.getPage(id).subscribe(
            page => {
                this.page = page;
                this.title = page.title;
                this.body = page.body;
                this.id = page.id;
            },
            error => console.log(error)
        );
    }
    savePage(){
        this.page.title = this.title;
        this.page.body = this.body;
        this.page.id = this.id;
        this.service.updatePage(this.page).subscribe(
            page => {
                this.router.navigate(['/pages/', page.id]);
            },
            error => console.log(error)
        );
        console.log(this.id);
    }

    goBack(){
        this.location.back();
    }
}