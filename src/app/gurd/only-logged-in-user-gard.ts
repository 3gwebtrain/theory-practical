import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

	constructor(private userService: UserService) {};

	canActivate(){
		if(this.userService.isLoggedIn()){
			return true;
		}
		else{
			window.alert("You don't have permission to this page!!");
			return false;
		}
	}

}