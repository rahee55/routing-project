import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    users: User[] = [
        new User(1, 'John Smith', 'ts', '12345'),
        new User(2, 'Merry Jane', 'tt', '12345'),
        new User(3, 'Mark Vought', 'ss', '12345'),
        new User(4, 'Sarah King', 'st', '12345')
    ]
}