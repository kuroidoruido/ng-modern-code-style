import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "personList_step_00",
	template: `
        <div *ngFor="let person of people" class="card">
            <h3>{{person.firstname}} {{person.lastname}}</h3>
        </div>
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
	imports: [NgForOf],
})
export class PersonList {
	people: any[] = [
		{ id: "0", firstname: "Aïcha", lastname: "Diallo" },
		{ id: "1", firstname: "Lucas", lastname: "Martinez" },
		{ id: "2", firstname: "Léa", lastname: "Nguyen" },
		{ id: "3", firstname: "Karim", lastname: "Benali" },
		{ id: "4", firstname: "Mei", lastname: "Chen" },
		{ id: "5", firstname: "Élodie", lastname: "Moreau" },
	];
}
