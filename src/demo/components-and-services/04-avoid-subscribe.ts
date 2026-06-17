import { AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { PersonCard } from "./person-card";

export interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Component({
	selector: "app-person-list_step_04",
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
	// [!code word:AsyncPipe:1]
	imports: [AsyncPipe, PersonCard],
})
export class PersonList {
	private readonly http = inject(HttpClient);
	// [!code highlight:1]
	protected readonly people$ = this.http.get<Person[]>("/assets/demo/components-and-services/people.json");
}
