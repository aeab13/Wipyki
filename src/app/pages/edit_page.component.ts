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
    content: string;
    id: number;
    isNew: boolean = false;

    constructor(private router:Router, activatedRoute: ActivatedRoute, private service: WikiService, private location: Location) {
        let id = activatedRoute.snapshot.params['id'];
        if (id) {
            this.service.getPage(id).subscribe(
                page => {
                    this.page = page;
                    this.title = page.title;
                    this.content = page.content;
                    this.id = page.id;
                },
                error => console.log(error)
            );
        } else{
            this.page = {title:'', content: '', create_date: new Date()};
            this.isNew = true;
        }
    }
    savePage(){
        this.page.title = this.title;
        this.page.content = this.content;
        this.page.id = this.id;
        console.log('Date: ' + new Date);
        this.page.last_edit_date = new Date();
        if(this.isNew){
            this.page.create_date = new Date();
            this.addPage();
            console.log("New");
        } else{
            this.updatePage();
        }
    }

    goBack(){
        this.location.back();
    }

    private updatePage(){
        this.service.updatePage(this.page).subscribe(
            page => {
                this.router.navigate(['/pages/', page.id]);
            },
            error => console.log(error)
        );
    }
    private addPage(){
        this.service.addPage(this.page).subscribe(
            page => {
                this.router.navigate(['/pages/', page.id]);
            },
            error => console.log(error)
        );
    }
}