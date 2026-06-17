import { Component, input } from "@angular/core";

// [!code highlight:5]
interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Component({
	selector: "personCard_step_07",
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
        `,
})
export class PersonCard {
	// [!code word:Person:1]
	public readonly person = input.required<Person>();
}

@Component({
	selector: "personList_step_07",
	template: `
        @for (person of people; track person.id) {
            <personCard_step_07 [person]="person" />
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
	// [!code word:Person:1]
	protected readonly people: Person[] = [
		{ id: "0", firstname: "Aïcha", lastname: "Diallo" },
		{ id: "1", firstname: "Lucas", lastname: "Martinez" },
		{ id: "2", firstname: "Léa", lastname: "Nguyen" },
		{ id: "3", firstname: "Karim", lastname: "Benali" },
		{ id: "4", firstname: "Mei", lastname: "Chen" },
		{ id: "5", firstname: "Élodie", lastname: "Moreau" },
	];
}
