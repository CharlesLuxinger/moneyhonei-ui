import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        LancamentosPesquisaComponent,
        NavbarComponent,
        PersonSearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        TooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
