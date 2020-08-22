import { APP_BASE_HREF, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderbarComponent } from './app-navbar/headerbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeValuesService } from './_shared/services/codeValuesService';
// every module that has a routing component no longer needs to be imported here
import { AppSharedModule } from './_shared/_shared.module';


export function appInit(codeValuesService: CodeValuesService) {
  return () => codeValuesService.buildArrays();
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'always' }),
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule.forRoot(),
  ],

  declarations: [
    AppComponent,
    HeaderbarComponent
  ],

  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [CodeValuesService],
      multi: true // required because it reference ApplicationStatusService which is multi and "can't mix"
    },
    Location
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
