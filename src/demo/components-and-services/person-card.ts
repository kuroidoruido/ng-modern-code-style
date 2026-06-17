import { Component, input } from "@angular/core";
import { Person } from "./00-init";

@Component({
	selector: "app-person-card",
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
	public readonly person = input.required<Person>();
}
