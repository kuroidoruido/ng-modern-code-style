import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { PersonCard } from "./person-card";

export interface Person {
    id: string;
    firstname: string;
    lastname: string;
}

@Component({
    selector: 'app-person-list_step_03',
    template: `
        @for (person of people; track person.id) {
            <app-person-card [person]="person" />
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
    private readonly http = inject(HttpClient);
    protected people: Person[] = [];

    constructor() {
        // [!code highlight:1]
        this.http.get<Person[]>('/assets/demo/components-and-services/people.json').subscribe((people) => {
            this.people = people;
        });
    }
}