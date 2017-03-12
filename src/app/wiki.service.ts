import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Page } from './page.model';

const PAGES_URL = 'http://localhost:8000/posts/';

@Injectable()
export class WikiService {

	constructor(private http: Http) { }

	getPages() {
		return this.http.get(PAGES_URL)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	getPage(id: number | string) {
		return this.http.get(PAGES_URL + id + '/')
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	addPage(page: Page) {
		return this.http.post(PAGES_URL, page)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	removePage(page: Page) {
		return this.http.delete(PAGES_URL + page.id)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	updatePage(page: Page) {
		return this.http.put(PAGES_URL + page.id + '/', page)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}