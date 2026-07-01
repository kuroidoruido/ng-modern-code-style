import { Component } from "@angular/core";
import { NgLogo } from "./ng-logo";
import { PillInnerLink } from "./pills/pill-inner-link";
import { PillLink } from "./pills/pill-link";
import { PillsGroup } from "./pills/pills-group";

@Component({
	selector: "app-header",
	template: `
      <header>
    <div class="content">
      <div class="left-side">
        <h1 i18n>Let's play with the modern <app-ng-logo /> code style! 🤓</h1>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <div class="right-side">
        <app-pills-group>
          <app-pill-link title="Angular DevTools" link="https://angular.dev/tools/devtools" />
          <app-pill-inner-link title="Explore the AGENTS.md" link="/agents-md" />
          <app-pill-inner-link title="Simple component" link="/simple-component" />
          <app-pill-inner-link title="Components & Services" link="/components-and-services" />
          <app-pill-inner-link title="Migrations" link="/migrations" />
        </app-pills-group>
      </div>
    </div>
  </header>
  `,
	styles: `
    header {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-sizing: inherit;
        position: relative;

        h1 {
            font-size: 3.125rem;
            // color: var(--gray-900);
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.125rem;
            margin: 0;
            font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol";
        }

        p {
            margin: 0;
            color: var(--gray-700);
        }
        
        .content {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 90ch;
            margin-bottom: 3rem;

            .left-side {
              width: 24em;
            }
        }
        
        .content h1 {
            margin-top: 1.75rem;
        }
        
        .content p {
            margin-top: 1.5rem;
        }
        
        .divider {
            width: 2px;
            background: var(--red-to-pink-to-purple-vertical-gradient);
            margin-inline: 0.5rem;
        }
        
        
        @media screen and (max-width: 650px) {
            .content {
                flex-direction: column;
                width: max-content;
            }
        
            .divider {
                height: 1px;
                width: 100%;
                background: var(--red-to-pink-to-purple-horizontal-gradient);
                margin-block: 1.5rem;
            }
        }
    }
    `,
	imports: [NgLogo, PillLink, PillInnerLink, PillsGroup],
})
export class Header {}
