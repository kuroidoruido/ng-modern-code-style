import { HttpClient } from "@angular/common/http";
import { Component, Injectable, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, of } from "rxjs";
import { PersonCard } from "./person-card";

export interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Injectable({ providedIn: "root" })
export class PeopleService {
	private readonly http = inject(HttpClient);

	getPeople() {
		// [!code highlight:5]
		return this.http.get<Person[]>("/assets/demo/components-and-services/people.json").pipe(
			catchError((err) => {
				console.error(err);
				return of([]);
			}),
		);
	}
}

@Component({
	selector: "app-person-list_step_09",
	template: `
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
	imports: [PersonCard],
})
export class PersonList {
	protected readonly people = toSignal(inject(PeopleService).getPeople(), { initialValue: [] });
}
