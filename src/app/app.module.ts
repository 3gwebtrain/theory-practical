import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchService } from './services/search.service';
import { HeaderComponent } from './pages/header/header.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { ArtistTrackListComponent } from './pages/Artist/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './pages/Artist/artist-album-list/artist-album-list.component';


const routes:Routes = [

	{ path:"", redirectTo:"home", pathMatch : 'full'},
	{ path:"find", redirectTo:"search"},
	{ path:"home", component:HomePageComponent},
	{ path:"search", component : SearchPageComponent},
	{ path:"artist/:artistId", component:ArtistComponent,
		children:[
			{path: '', redirectTo: 'tracks', pathMatch : 'full'},
			{path: 'tracks', component: ArtistTrackListComponent},
			{path: 'albums', component: ArtistAlbumListComponent}
		]
	},
	{ path:"**", component:HomePageComponent},

]

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		SearchPageComponent,
		HeaderComponent,
		ArtistComponent,
		ArtistTrackListComponent,
		ArtistAlbumListComponent
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
