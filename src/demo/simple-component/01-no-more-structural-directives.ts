import { Component } from "@angular/core";

@Component({
    selector: 'personList_step_01',
    template: `
<!-- [!code highlight:1] -->
        @for (person of people; track $index) {
            <div class="card">
                <h3>{{person.firstname}} {{person.lastname}}</h3>
            </div>
<!-- [!code highlight:1] -->
        }
    `,
    styles: `
        :host {
            display: flex;
            gap: 0.25em;
            flex-wrap: wrap;
        }
        .card {
            border: 1px solid lightblue;
            padding: 0.5em 1rem;
        }
    `,
})
export class PersonList {
    people: any[] = [
        { id: '0', firstname: 'Aïcha', lastname: 'Diallo' },
        { id: '1', firstname: 'Lucas', lastname: 'Martinez' },
        { id: '2', firstname: 'Léa', lastname: 'Nguyen' },
        { id: '3', firstname: 'Karim', lastname: 'Benali' },
        { id: '4', firstname: 'Mei', lastname: 'Chen' },
        { id: '5', firstname: 'Élodie', lastname: 'Moreau' },
    ];
}