import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { PersonCard } from "./person-card";

export interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Component({
	selector: "app-person-list_step_02",
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
	imports: [PersonCard],
})
// [!code highlight:1]
export class PersonList {
	private readonly http = inject(HttpClient);
	protected people: Person[] = [];

	// [!code highlight:1]
	constructor() {
		this.http.get("/assets/demo/components-and-services/people.json").subscribe((people: any) => {
			this.people = people;
		});
	}
}
