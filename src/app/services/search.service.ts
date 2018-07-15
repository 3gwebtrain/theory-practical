import { Injectable } from '@angular/core';
import { SearchItem } from '../model/search-item-model';
import { Jsonp, Response} from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	apiRoot: string = 'https://itunes.apple.com/search';
	results: SearchItem[];

	constructor(private jsonp: Jsonp) {

		this.results = [];

	}

	search(term: string) {
		return new Promise((resolve, reject) => {
			this.results = [];
			let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10&callback=JSONP_CALLBACK`;
			this.jsonp.request(apiURL).toPromise().then( res => { 
				this.results = res.json().results.map(item => {
					return new SearchItem(
						item.trackName,
						item.artistName,
						item.trackViewUrl,
						item.artworkUrl30,
						item.artistId
					);
				});

			resolve();
		},
			msg => { // Error
				reject(msg);
			});
			
		});
	}

}
