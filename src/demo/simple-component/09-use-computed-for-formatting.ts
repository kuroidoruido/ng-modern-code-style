import { Component, computed, input } from "@angular/core";

interface Person {
	id: string;
	firstname: string;
	lastname: string;
}

@Component({
	selector: "app-person-card_step_09",
	template: `
        <div class="card">
			<!-- [!code highlight:1] -->
            <h3>{{fullName()}}</h3>
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
	public readonly person = input.required<Person>();
	// [!code highlight:1]
	protected readonly fullName = computed(() => `${this.person().firstname} ${this.person().lastname}`);
}

const PEOPLE: Person[] = [
	{ id: "0", firstname: "Aïcha", lastname: "Diallo" },
	{ id: "1", firstname: "Lucas", lastname: "Martinez" },
	{ id: "2", firstname: "Léa", lastname: "Nguyen" },
	{ id: "3", firstname: "Karim", lastname: "Benali" },
	{ id: "4", firstname: "Mei", lastname: "Chen" },
	{ id: "5", firstname: "Élodie", lastname: "Moreau" },
];

@Component({
	selector: "app-person-list_step_09",
	template: `
        @for (person of PEOPLE; track person.id) {
            <app-person-card_step_09 [person]="person" />
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
	protected readonly PEOPLE = PEOPLE;
}
