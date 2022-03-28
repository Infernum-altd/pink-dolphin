import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ArticlePreviewComponent} from './common/article-preview/article-preview.component';
import {MatCardModule} from "@angular/material/card";
import {FooterComponent} from './common/footer/footer.component';
import {MatTabsModule} from "@angular/material/tabs";
import {CategorySwitchComponent} from './common/category-switch/category-switch.component';
import {HttpClientModule} from "@angular/common/http";
import {HomepageComponent} from './common/homepage/homepage.component';
import {ArticleCreatorComponent} from './administration/article-creator/article-creator.component';
import {ArticleListComponent} from './common/article-list/article-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {ArticlePageComponent} from './common/article-page/article-page.component';
import {RichTextEditorComponent} from './administration/article-creator/article-elements/rich-text-editor/rich-text-editor.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {PublishDialogComponent} from './administration/article-creator/publis-dialog/publish-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ImageUploaderComponent } from './administration/article-creator/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlePreviewComponent,
    FooterComponent,
    CategorySwitchComponent,
    HomepageComponent,
    ArticleCreatorComponent,
    ArticleListComponent,
    ArticlePageComponent,
    RichTextEditorComponent,
    PublishDialogComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatPaginatorModule,
    AngularEditorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
