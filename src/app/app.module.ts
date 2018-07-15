import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchService } from './services/search.service';
import { HeaderComponent } from './pages/header/header.component';


const routes:Routes = [

	{ path:"", redirectTo:"home", pathMatch : 'full'},
	{ path:"find", redirectTo:"search"},
	{ path:"home", component:HomePageComponent},
	{ path:"search", component : SearchPageComponent},
	{ path:"**", component:HomePageComponent}

]

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		SearchPageComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		JsonpModule,
		RouterModule.forRoot(routes, {useHash:true})
	],
	providers: [SearchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
