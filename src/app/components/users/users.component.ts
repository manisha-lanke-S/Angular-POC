import { Component } from '@angular/core';
import { USERS } from './users';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    users = USERS;
    show = true;

    constructor() { }
}