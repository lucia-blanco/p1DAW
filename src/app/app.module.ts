import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HighlightModule } from 'ngx-highlightjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { PresentationComponent } from './presentation/presentation.component';

import { SlidesService } from './shared/slides.service';
import { SourceCodeComponent } from './source-code/source-code.component';
import { UsdEurConverterComponent } from './usd-eur-converter/usd-eur-converter.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    PresentationComponent,
    SourceCodeComponent,
    UsdEurConverterComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({theme: 'rainbow'}),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
