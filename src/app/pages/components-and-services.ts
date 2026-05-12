import { Component, inject } from "@angular/core";
import { ThemeService } from "../../theme";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
    selector: 'components-and-services',
    template: `
    <h1>Components & Services</h1>
        <form>
            <label><input type="radio" name="theme" value="light" [checked]="theme() === 'light'" (change)="themeService.setTheme('light')"> Light</label>
            <label><input type="radio" name="theme" value="dark" [checked]="theme() === 'dark'" (change)="themeService.setTheme('dark')"> Dark</label>
        </form>

        <ul>
            <li>RxJS côté Service / Signals côté Component</li>
            <li>Passer de RxJS à un Signal via toSignal() dans le composant</li>
            <li>Pensez à initiliser le signal via <code>toSignal(..., &lcub; initialValue: 'default value' &rcub;)</code></li>
        </ul>
    `
})
export default class ComponentsAndServices {
    protected readonly themeService = inject(ThemeService);
    protected readonly theme = toSignal(this.themeService.getTheme(), { initialValue: 'light' });
}