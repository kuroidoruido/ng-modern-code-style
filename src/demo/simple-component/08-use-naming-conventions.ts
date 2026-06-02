import { Component, input } from "@angular/core";

interface Person {
    id: string;
    firstname: string;
    lastname: string;
}

@Component({
    // [!code highlight:1]
    selector: 'app-person-card_step_08',
    template: `
        <div class="card">
            <h3>{{person().firstname}} {{person().lastname}}</h3>
        </div>
        `,
    styles: `
        .card {
            border: 1px solid light-dark(lightblue, orange);
            padding: 0.5em 1rem;
        }
        `
})
export class PersonCard {
    public readonly person = input.required<Person>();
}

// [!code highlight:8]
const PEOPLE: Person[] = [
    { id: '0', firstname: 'Aïcha', lastname: 'Diallo' },
    { id: '1', firstname: 'Lucas', lastname: 'Martinez' },
    { id: '2', firstname: 'Léa', lastname: 'Nguyen' },
    { id: '3', firstname: 'Karim', lastname: 'Benali' },
    { id: '4', firstname: 'Mei', lastname: 'Chen' },
    { id: '5', firstname: 'Élodie', lastname: 'Moreau' },
];

@Component({
    // [!code highlight:1]
    selector: 'app-person-list_step_08',
    template: `
        @for (person of PEOPLE; track person.id) {
            <app-person-card_step_08 [person]="person" />
        }
        `,
    styles: `
        :host {
            display: flex;
            gap: 0.25em;
            flex-wrap: wrap;
        }
        `,
    imports: [PersonCard]
})
export class PersonList {
    // [!code highlight:1]
    protected readonly PEOPLE = PEOPLE;
}