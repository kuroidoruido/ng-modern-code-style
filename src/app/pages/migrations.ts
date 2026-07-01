import { Component } from "@angular/core";
import { Collapse } from "../components/collapse";

@Component({
	selector: "simple-component",
	template: `
        <h1>Migrations</h1>
        <app-collapse i18n-title title="Versions one by one">
            <p i18n>Especially when we have late, it can be frustrating to make version migration one by one. But it's very important to doing it like that!</p>
            <p i18n>First point: the Angular CLI will not let you upgrade more than one major version.</p>
            <p i18n>Then, it can be difficult to identify whats break up when you do not test every major update.</p>
            <p i18n>Major version update are not painful if you follow as much possible Angular recommendations. So you can make them easily. The longest part is to test the app, and here it's important to have a proper testing strategy (if you have a good automated testing stack, you will be able to be confident the update was successful very fast!).</p>
        </app-collapse>
        <app-collapse i18n-title title="Ensure you do not have any Angular lib that depends to the current version of Angular you are using">
            <p i18n>Before any update, you should inspect your <code>package.json</code> to find any angular related lib you have.</p>
            <p i18n>Most Angular libs use the <code>ngx-</code> prefix, but some don't, so be attentive!</p>
            <p i18n>Don't hesitate to use tools like <a href="https://knip.dev">Knip</a> to identify useless dependencies.</p>
        </app-collapse>
        <app-collapse i18n-title title="Read the update blog post">
            <p i18n>The Angular Team push official framework update on the <a href="https://blog.angular.dev/">official blog</a>. Read it before update. It will help you a lot!</p>
            <p i18n>Don't hesitate to read the <a href="https://blog.ninja-squad.fr/">Ninja Squad blog</a> posts too. The Ninja Squad team provide very precise information about the updates, with a different approach than the official blog.</p>
        </app-collapse>
        <app-collapse i18n-title title="Never use --force / --legacy-peer-deps">
            <p i18n>There is some cases where <code>npm</code> or the Angular CLI will prompt you that you can use <code>--force</code> or <code>--legacy-peer-deps</code> to bypass dependency resolution issues, and it most cases it will break thing directly or in a more subtile way you will pay in the future.</p>
            <p i18n>As much possible: never use these options and find another solution!</p>
        </app-collapse>
        <app-collapse i18n-title title="Follow Angular update guide">
            <p i18n>The Angular Team maintain a clear, step by step, update guide <a href="https://angular.dev/update-guide">here</a>.</p>
            <p i18n>You should follow it!</p>
        </app-collapse>
        <app-collapse i18n-title title="Use the CLI">
            <p i18n>Just to be sure: USE THE CLI.</p>
            <p i18n>Never ever do manual updates! The Angular CLI is designed to handle updates safely and efficiently. It is also design to tackle the migration breaking changes automatically as much as possible.</p>
        </app-collapse>
        <app-collapse i18n-title title="Use Anguclar Can I Use">
            <p i18n>Use <a href="https://www.angular.courses/caniuse?tab=features">Angular Can I Use</a> (not an official tool, but made by a passionate developer, which gives a lot of energy to keep it up to date) to ensure what can be migrate, especially if you are in late (not on the latest version).</p>
            <p i18n>This tool will help you identify which features are available in which versions, and if you can run migration scripts on the version you are updating to.</p>
            <p i18n>I think it's the best tool to keep modernizing your Angular app!</p>
        </app-collapse>
        <app-collapse i18n-title title="Ensure every deps are up to date">
            <p i18n>Update Angular is great, but upgrade all deps are as important!</p>
            <p i18n>I saw a lot of project which have an update to date Angular version, but everything beside is pretty old, deprecated and problematic.</p>
            <p i18n>Ensure you have update everything to an recent version!</p>
        </app-collapse>
        <app-collapse i18n-title title="Re-run npm ci">
            <p i18n>Sometimes we can have some surprises when updating dependencies. Re-running <code>npm ci</code> can help ensure a clean installation, and also ensure all coworkers will not have any issue.</p>
            <p i18n>Before your <code>npm ci</code>, don't forget to delete your <code>node_modules</code>!</p>
        </app-collapse>
    `,
	imports: [Collapse],
})
export default class SimpleComponent {}
