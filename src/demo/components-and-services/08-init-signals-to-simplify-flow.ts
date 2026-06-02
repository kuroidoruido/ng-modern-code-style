import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { PersonCard } from "./person-card";
import { toSignal } from "@angular/core/rxjs-interop";

export interface Person {
    id: string;
    firstname: string;
    lastname: string;
}

@Injectable({ providedIn: 'root' })
export class PeopleService {
    private readonly http = inject(HttpClient);

    getPeople() {
        return this.http.get<Person[]>('/assets/demo/components-and-services/people.json');
    }
}

@Component({
    selector: 'app-person-list_step_08',
    template: `
        <!-- [!code highlight:1] --> 
        @for (person of people(); track person.id) {
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
    // [!code highlight:1]
    imports: [PersonCard]
})
export class PersonList {
    // [!code highlight:1]
    protected readonly people = toSignal(inject(PeopleService).getPeople(), { initialValue: [] });
}