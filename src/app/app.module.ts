import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DropdownModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about.component';
import { PagesComponent } from './pages/pages.component';
import { PageComponent } from './pages/page.component';
import { EditPageComponent } from './pages/edit_page.component';
import { WikiService } from './wiki.service'
import { routing } from './app.routing';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';
import { CollapseDirective } from 'ng2-bootstrap'
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PagesComponent,
    PageComponent,
    EditPageComponent,
    MarkdownToHtmlPipe,
    CollapseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    routing,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
