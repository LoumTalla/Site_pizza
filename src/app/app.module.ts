import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-container/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './pizza-container/pizza-details/pizza-details.component';
import { HeaderComponent } from './header/header.component';
import { PizzaContainerComponent } from './pizza-container/pizza-container.component';
import { SelectedDirective } from './shared/directives/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    HeaderComponent,
    PizzaContainerComponent,
    SelectedDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
