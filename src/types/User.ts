import {Song} from './Song';

export interface User {
    firstName: string
    lastName: string
    favouriteSong?: Song
}