import { Component, inject } from "@angular/core";
import { DemoCode } from "../components/demo-code";
import { Collapse } from "../components/collapse";

@Component({
    selector: 'components-and-services',
    template: `
    <h1>Components & Services</h1>
    <app-collapse title="Let's start with a simple component">
        <p>Here we have a pretty classical component which grab some data with an http call then display the result.</p>
        <p>But there is so much (very) old and/or bad practices...</p>
        <app-demo-code path="components-and-services/00-init.ts" component="PersonList" stepMark="_step_00" />
    </app-collapse>
    <app-collapse title="Use inject()">
        <p>Using the injection in the <code>constructor()</code> will sometimes force you to differ the component initialization, create a little bit of complexity, split your properties between two places (the class root and the constructor params).</p>
        <p>Modern Angular offer the <code>inject()</code> function to directly inject things as properties simplifying a lot the code. It also simplify inner injection flow of your components, and will be the only way to inject things with the future <code>@Service()</code> decorator (which will be the recommended way to create services from Angular v22).</p>
        <app-demo-code path="components-and-services/01-use-inject.ts" component="PersonList" stepMark="_step_01" />
        <p>Here we deleted the <code>constructor()</code> to directly inject the <code>HttpClient</code> in the property initialization. It make the code simpler and clearer.</p>
    </app-collapse>
    <app-collapse title="Avoid ngOnInit()">
        <p><code>ngOnInit()</code> is inherited from the beginning of Angular 2. From Angular 16, it's pretty much useless to use this hook, and we can put anything in the <code>ngOnInit()</code> directly to the <code>constructor()</code> method.</p>
        <p>Making this change will let you use TypeScript compiler to help you initialize everything and simplify your component lifecycle.</p>
        <app-demo-code path="components-and-services/02-avoid-ngoninit.ts" component="PersonList" stepMark="_step_02" />
        <p>Here we rename the <code>ngOnInit()</code> to <code>constructor()</code> and remove the <code>OnInit</code> implements. It reduce the boilerplate, it simplify the code a little bit.</p>
    </app-collapse>
    <app-collapse title="Type data sources">
        <p>The more you type data sources, the less explicit typing you will be forced to put, the more the TypeScript compiler will be able to help you.</p>
        <app-demo-code path="components-and-services/03-type-data-source.ts" component="PersonList" stepMark="_step_03" />
    </app-collapse>
    <app-collapse title="Avoid subscribe">
        <p>From the beginning of usage RxJS in Angular, we can see a lot of issue with <code>.subscribe()</code>. Every time we subscribe, we need to unsubscribe! Except you never subscribe!</p>
        <p>In Angular, there is the <code>AsyncPipe</code> which is here to handle correctly subscription/unsubscription automatically when the component is created/destroyed. Use it everywhere as much possible.</p>
        <p>When you need some data outside the template (and here you cannot use <code>AsyncPipe</code>), you may use the <code>takeUntilDetroyed()</code> operator, that will help you to handle correctly the unsubscription.</p>
        <app-demo-code path="components-and-services/04-avoid-subscribe.ts" component="PersonList" stepMark="_step_04" />
        <p>Here, we moved the http call Observable to the property initialization. We follow the RxJS convention placing a <code>$</code> at the end of the property name. And we can remove the <code>constructor()</code>. Using the <code>AsyncPipe</code> we directly indicate to Angular to handle the subscription and we use the Observable pretty much a simple property.</p>
        <p>As we never subscribe to the Observable, we don't need to unsubscribe. Angular will subscribe and unsubscribe when needed for us.</p>
        <p>You can also notice we do not need to repeat any type here: the <code>http.get()</code> is typed and the type is implicitly propagate everywhere (templates included).</p>
    </app-collapse>
    <app-collapse title="Use inject directly without intermediary properties when possible">
        <p>A lot of people will declare there injected services, them use them. If you only need the service once, you can directly inject the service in the same code row than the usage (also work in <code>constructor()</code> for example).</p>
        <p>It changes pretty nothing to the readability, it only reduce a little bit the amount of code, but it indicate explicitly to future developer that the service is only used once and it can prevent some mental check when debugging.</p>
        <app-demo-code path="components-and-services/05-direct-inject.ts" component="PersonList" stepMark="_step_05" />
    </app-collapse>
    <app-collapse title="Move data manipulation to services">
        <p>Components are for display thing, services are for manipulate data and share things.</p>
        <p>As much possible, you should move data manipulation to services. It will help you reuse the code, simplify the testing, keep responsibility clear.</p>
        <app-demo-code path="components-and-services/06-data-manipulation-in-services.ts" component="PersonList" stepMark="_step_06" />
        <p>We can see the http call code has moved to the service with a method to get access to it.</p>
        <p>We prefer having method to let us refactor easily if needed in the future, reducing code impact.</p>
        <p>As always: keep everything as much possible <code>private readonly</code> in your services and them open what is need to reduce the API of your services.</p>
    </app-collapse>
    <app-collapse title="Prefer Signals in components">
        <p>Managing Observable directly in the template will perfectly work, but we can make simpler thing today using Signals.</p>
        <p>The simpler refactor is to use <code>toSignal()</code> to transform our Observable to a Signal. This is what we used bellow.</p>
        <app-demo-code path="components-and-services/07-prefer-signals-in-components.ts" component="PersonList" stepMark="_step_07" />
        <p>If you need to track loading, errors, etc. you can use <code>rxResource()</code> to have more information about the Observable state.</p>
    </app-collapse>
    <app-collapse title="Init all Signals">
        <p>A Signal is a box which give access to the inner value at any time. What happen if you get access to the value of the signal before the Observable resolve? It will give you <code>null</code>. It's preferable to initialize the Signal to avoid this.</p>
        <app-demo-code path="components-and-services/08-init-signals-to-simplify-flow.ts" component="PersonList" stepMark="_step_08" />
        <p>Here we initialize with empty array, but in some case you may want a more elaborate default value.</p>
    </app-collapse>
    <app-collapse title="Handle errors">
        <p>I see a lot of application that does nothing about errors. If you have no idea about errors that can happen you can basically: print them in the console + return a default value; at least, it will help you identify the issues.</p>
        <p>You can have a better error handling strategy: retries, refresh token (on http 401), trigger a toast, lock the app (to avoid the users to crash everything on backend side), etc. With RxJS everything of this is pretty easy to implement.</p>
        <app-demo-code path="components-and-services/09-handle-errors.ts" component="PersonList" stepMark="_step_09" />
    </app-collapse>
    <app-collapse title="Share resource call result">
        <p>Except you do have a state manager (NgRX for example), you probably often want getting access to the service data on multiple place in your application.</p>
        <p>The simplest way to doing so is to make the call in the parent component, then drilling it through props from component to component.</p>
        <p>The best way to doing that is maybe to handle this from the service. This way every components will make dumb calls to the service and the data management is kept in the service. With RxJS we can make it very easily!</p>
        <app-demo-code path="components-and-services/10-share-resource-call-result.ts" component="PersonList" stepMark="_step_10" />
        <p>In our example:</p>
        <ul>
            <li>We move the http call to a private method;</li>
            <li>We call this method in a property of the service;</li>
            <li>In a pipe after this call we added a <code>shareReplay(1)</code> operator to ensure the Observable sharing;</li>
            <li>The previous public method now only return the Observable property;</li>
        </ul>
        <p>Using a simple <code>shareReplay(1)</code> will make the trick here and cover a lot of use cases: making the call when needed the first time, keep it in memory as long as at least one component use it, give the latest value to any new subscriber, free the memory when no one subscribe.</p>
    </app-collapse>
    `,
    imports: [DemoCode, Collapse]
})
export default class ComponentsAndServices {}