import { Component } from "@angular/core";
import { Collapse } from "../components/collapse";
import { DemoCode } from "../components/demo-code";

@Component({
	selector: "simple-component",
	template: `
        <h1>Simple Component</h1>
        <app-collapse title="Let's start with a simple component">
            <p>Here we have a simple component that displays a list of people. Nothing fancy, just a basic *ngFor to loop through the list and display each person's name.</p>
            <p>But it use a lot of old practices...</p>
            <app-demo-code path="simple-component/00-init.ts" component="PersonList" stepMark="_step_00" />
        </app-collapse>
        <app-collapse title="No more *ngFor/*ngIf/*ngSwitch">
            <p>From Angular 17, we should use <code>&#64;for</code>, <code>&#64;if</code> and <code>&#64;switch</code> (rather than *ngFor, *ngIf, *ngSwitch).</p>
            <p>Ditching out the structural directive will improve readability but also the rending speed (you can expect up to x5 speedup).</p>
            <app-demo-code path="simple-component/01-no-more-structural-directives.ts" component="PersonList" stepMark="_step_01" />
        </app-collapse>
        <app-collapse title="Pay attention to the track">
            <p>When using &#64;for, always specify a track expression to improve performance.</p>
            <p>By default, a lot of people will use $index to make it compile but it's a bad habit as it's not resilient to the list sort or adding new item. Prefer as much possible a consistent tracking identifier.</p>
            <p>In our example, we can use <code>person.id</code>.</p>
            <app-demo-code path="simple-component/02-proper-track.ts" component="PersonList" stepMark="_step_02" />
        </app-collapse>
        <app-collapse title="Make everything private readonly by default, and open on need">
            <p>By default, everything we declare in the class of our component is public (everything is public by default in a TypeScript class, so it's the same for services, etc.). It can be difficult to track what is used and where. Also by default, everything is mutable, so it can be difficult to track what is really edited during the component lifecycle.</p>
            <p>To improve that, it's recommanded to make every method <code>private</code> by default, and every properties <code>private readonly</code>. If you need to access it from the template you can use <code>protected</code>. You should use <code>public</code> only for inputs.</p>
            <app-demo-code path="simple-component/03-private-readonly-by-default.ts" component="PersonList" stepMark="_step_03" />
            <p>In this example, we can make <code>protected readonly</code> the <code>people</code> property as it has only read access and have access from the template.</p>
            <p>If we make it <code>private</code>, we will have an Angular compilation error "Property 'people' is private and only accessible within class 'PersonList'." so we will know instantly what we should do to fix it this.</p>
        </app-collapse>
        <app-collapse title="Make small components">
            <p>As much as possible, we should make small components.</p>
            <p>Small components does not means every time reusable components, but small concern.</p>
            <p>Here we can extract the person card into a separate component. It have a single responsibility, and if the card component grow up we will be able to manage it more easily.</p>
            <p>Also prefer single file component (SFC). It will force you to keep component small (big component imply big file with SFC) and also let you see the full code of one component without switching files (in the example, we have only a small template, and the component stay easily readable).</p>
            <app-demo-code path="simple-component/04-small-components.ts" component="PersonList" stepMark="_step_04" />
            <p>Don't forget a component is only a class and it's not mandatory to have a dedicated file for each component. If it makes sense to keep component together, keep them together.</p>
        </app-collapse>
        <app-collapse title="Use input.required<Type>() as much as possible">
            <p>A lot of component cannot work without some or all of their inputs. Make them required explicitly as much as possible to make it verified compiled-time.</p>
            <p>If you do so, you will gain two things:</p>
            <ul>
                <li>Compiler will help you to set the minimal inputs list to a component;</li>
                <li>Compiler will help you to find any wrong usage when you add the required;</li>
            </ul>
            <app-demo-code path="simple-component/05-input-required.ts" component="PersonList" stepMark="_step_05" />
        </app-collapse>
        <app-collapse title="Use the platform">
            <p>A lot of thing can be done with plan HTML, or plain CSS or at last plain JavaScript. Using framework specific libraries will lock you with the maintainer and can be painful in the future. Platform API is stable from the last decades.</p>
            <p>For example: cookies, storages, styles do not need libraries in my humble opinion.</p>
            <app-demo-code path="simple-component/06-prefer-browser-native.ts" component="PersonList" stepMark="_step_06" />
            <p>In this example we use plain CSS to have different border color in light or dark theme.</p>
        </app-collapse>
        <app-collapse title="Use the correct typing">
            <p>Ensure to type every data sources to ensure TypeScript will help you to avoid a lot of errors.</p>
            <app-demo-code path="simple-component/07-use-correct-typings.ts" component="PersonList" stepMark="_step_07" />
            <p>In this example, we defined a <code>Person</code> interface which is used rather than <code>any</code>.</p>
        </app-collapse>
        <app-collapse title="Use Angular naming conventions">
            <p>In Angular, we may use <code>app</code> prefix selector follow by a kebab-case name for component or camelCase for directive. This is inherited from the Web Component specification and we should follow this rather it works without it.</p>
            <p>Follow this convention allow any developer to know which tags in our template is a component from the app, a component from a lib (most of libs have a dedicated prefix, like Angular Material which use <code>mat-then-kabab-case</code> for component or <code>matThenCamelCase</code> for directive)</p>
            <p>Also, prefer name your variables/properties in camelCase except for constants ones where you should prefer SCREAMING_SNAKE_CASE.</p>
            <app-demo-code path="simple-component/08-use-naming-conventions.ts" component="PersonList" stepMark="_step_07" />

            <blockquote>
                <p>Remember the casing names:</p>
                <ul>
                    <li><strong>kebab-case</strong> is all lower case letters with words separated with dash like if a kebab spit was traversing the words (often used in HTML or CSS);</li>
                    <li><strong>snake_case</strong> is all lower case letters with underscore between words like a crawling snake;</li>
                    <li><strong>camelCase</strong> is first lower letter then a capital first letter for every next word (for JavaScript/TypeScript variables) like the hump from a camel;</li>
                    <li><strong>PascalCase</strong> is a capital first letter for every words (historically it comes from the Pascal language);</li>
                </ul>
                
                <p>There is also SCREAMING variants:</p>
                <ul>
                    <li><strong>SCREAMING-KEBAB-CASE</strong> that I only seem in COBOL of SQL;</li>
                    <li><strong>SCREAMING_SNAKE_CASE</strong> which is very common convention for constants;</li>
                </ul> 
            </blockquote>
        </app-collapse>
    `,
	imports: [Collapse, DemoCode],
})
export default class SimpleComponent {}
