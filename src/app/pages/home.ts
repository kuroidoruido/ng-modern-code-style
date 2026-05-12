import { Component } from "@angular/core";

@Component({
    selector: 'home',
    template: `<p>Made with ❤️ by <a href="https://anthonypena.fr">Anthony PENA</a></p>`,
    styles: `
        p {
            text-align: center;
        }
    `
})
export default class Home {}