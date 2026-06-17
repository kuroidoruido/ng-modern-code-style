import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { PersonCard } from "./person-card";

export interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Component({
	selector: "app-person-list_step_01",
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
export class PersonList implements OnInit {
	private readonly http = inject(HttpClient);
	protected people: Person[] = [];

	ngOnInit() {
		this.http.get("/assets/demo/components-and-services/people.json").subscribe((people: any) => {
			this.people = people;
		});
	}
}
