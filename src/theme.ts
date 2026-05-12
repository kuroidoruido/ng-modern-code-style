import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({  providedIn: 'root' })
export class ThemeService {
    private theme = new ReplaySubject<'light' | 'dark'>(1);

    constructor() {
        this.setTheme('light');
    }

    setTheme(theme: 'light' | 'dark') {
        this.theme.next(theme);
    }

    getTheme() {
        return this.theme.asObservable();
    }
}