import { CommonModule } from '@angular/common';
import { CustomTranslateLoader } from './custom-translate-loader';
import { SharedModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Application Components
import { AppComponent } from './app.component';

//Para traducir
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        NgxDropzoneModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoader
            }
        })
    ],    
    declarations: [
        AppComponent,        
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }

