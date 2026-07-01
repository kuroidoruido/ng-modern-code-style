import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PersonCard } from "./person-card";

export interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Component({
	selector: "app-person-list_step_00",
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
	protected people: Person[] = [];

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http.get("/assets/demo/components-and-services/people.json").subscribe((people: any) => {
			this.people = people;
		});
	}
}
