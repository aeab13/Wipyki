import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './pages/about.component'
import { PagesComponent } from './pages/pages.component'
import { PageComponent } from './pages/page.component'
import { EditPageComponent } from './pages/edit_page.component'
import { AppComponent } from './app.component'

const appRoutes = [
    { path: 'about', component: AboutComponent},
    { path: 'pages', component: PagesComponent},
    { path: 'pages/:id', component: PageComponent},
    { path: 'pages/edit/:id', component: EditPageComponent},
    { path: '', component: AboutComponent}
]

export const routing = RouterModule.forRoot(appRoutes);