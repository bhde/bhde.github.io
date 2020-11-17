import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditorViewerComponent } from './editor-viewer/editor-viewer.component';
import { HomeComponent } from './home/home.component';
import { EditorHeaderComponent } from './editor-header/editor-header.component';
import { EditionHeaderComponent } from './edition-header/edition-header.component';
import { EditionMainComponent } from './edition-main/edition-main.component';
import { EditionFooterComponent } from './edition-footer/edition-footer.component';
import { EditionReadCriticalComponent } from './edition-read-critical/edition-read-critical.component';
import { EditionReadTranslationComponent } from './edition-read-translation/edition-read-translation.component';
import { EditionComponent } from './edition/edition.component';
import { DataBookListComponent } from './data-book-list/data-book-list.component';
import { DataFilesListComponent } from './data-files-list/data-files-list.component';
import { DataWitListComponent } from './data-wit-list/data-wit-list.component';
import { EditorCardComponent } from './editor-card/editor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditorViewerComponent,
    HomeComponent,
    EditorHeaderComponent,
    EditionHeaderComponent,
    EditionMainComponent,
    EditionFooterComponent,
    EditionReadCriticalComponent,
    EditionReadTranslationComponent,
    EditionComponent,
    DataBookListComponent,
    DataFilesListComponent,
    DataWitListComponent,
    EditorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
