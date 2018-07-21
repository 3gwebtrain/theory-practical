import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchItem } from '../../model/search-item-model';	


@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

	public loading: boolean = false;
	private results: any;

	constructor(public itunes: SearchService, 

		private route: ActivatedRoute, private router: Router) { 

		this.route.params.subscribe(params => {
			if(params['term']){
				this.doSearch(params['term'])
			}
		})

	}

	ngOnInit() { }

	doSearch(term:string){
		this.loading = true;
		this.itunes.search(term).then(_ => { this.loading = false; });
	}

	onSearch(term: string) {
		this.router.navigate(['search',  {term:term}]);
	}

}
