import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { PersonCard } from "./person-card";
import { AsyncPipe } from "@angular/common";

export interface Person {
    id: string;
    firstname: string;
    lastname: string;
}

// [!code highlight:8]
@Injectable({ providedIn: 'root' })
export class PeopleService {
    private readonly http = inject(HttpClient);

    getPeople() {
        return this.http.get<Person[]>('/assets/demo/components-and-services/people.json');
    }
}

@Component({
    selector: 'app-person-list_step_06',
    template: `
        @for (person of people$ | async; track person.id) {
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
    imports: [AsyncPipe, PersonCard]
})
export class PersonList {
    // [!code highlight:1]
    protected readonly people$ = inject(PeopleService).getPeople();
}