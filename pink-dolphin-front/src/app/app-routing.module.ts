import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./common/homepage/homepage.component";
import {ArticleCreatorComponent} from "./administration/article-creator/article-creator.component";
import {ArticlePageComponent} from "./common/article-page/article-page.component";

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'creator', component: ArticleCreatorComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
