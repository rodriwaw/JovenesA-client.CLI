import { NgModule } from '@angular/core';
import { AppSharedModule } from '../_shared/_shared.module';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
    imports: [
        AppSharedModule,
        HomeRouting
        ],
    declarations: [HomeComponent]
})

export class HomeModule { }
