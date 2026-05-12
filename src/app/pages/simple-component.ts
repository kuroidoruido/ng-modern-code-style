import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'simple-component',
    template: `
        <h1>Simple Component</h1>
        <details [open]="theOpenOne === 'bestPractices'" (toggle)="onToggle($event, 'bestPractices')">
            <summary>Best practices</summary>
            <ul>
                <li *ngFor="let practice of bestPractices">{{ practice }}</li>
            </ul>
        </details>
        <details [open]="theOpenOne === 'conventions'" (toggle)="onToggle($event, 'conventions')">
            <summary>Conventions</summary>
            <ul>
                <li *ngFor="let convention of conventions">{{ convention }}</li>
            </ul>
        </details>
    `,
    imports: [NgForOf],
    // styles: `
    //     ul {
    //         li {
    //             &::after {
    //                 content: " ;";
    //             }
    //         }
    //     }`
})
export default class SimpleComponent {
    theOpenOne = 'none';

    bestPractices: any[] = [
        'Utiliser les @if/@for@switch plutôt que les directives structurelles',
        'Pour @for, bien réfléchir au track',
        'Private par défaut, protected si besoin dans le template, jamais "default" (pas d\'indication = public) ou public',
        'Faire des petits composants, template court, le moins de logique possible dans le template, en single file si possible',
        'input.required<Type>() autant que possible',
        'Même si on est en Angular : les trucs standard HTML/CSS/JS sont à privilégier',
        'Attention aux typings : pas de any (au pire unknown), favoriser les types implicites, ne pas hésiter à survoler les types pour vérifier que tout est bien typé',
    ];
    conventions: string[] = [
        'Variable  d\'instance (si pas besoin de réactivité), puis signal, puis autre solution (constantes en SCREAMING_SNAKE_CASE, le reste en camelCase)',
    ];

    onToggle(event: ToggleEvent, name: string) {
        if (this.theOpenOne === name && event.newState === 'closed') {
            this.theOpenOne = 'none';
        } else if (event.newState === 'open') {
            this.theOpenOne = name;
        }
    }

}