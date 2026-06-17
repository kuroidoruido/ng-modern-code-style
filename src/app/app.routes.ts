import type { Routes } from "@angular/router";

export const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: "home", loadComponent: () => import("./pages/home") },
	{ path: "agents-md", loadComponent: () => import("./pages/agents-md"), title: "Explore the AGENTS.md" },
	{ path: "simple-component", loadComponent: () => import("./pages/simple-component"), title: "Simple Component" },
	{
		path: "components-and-services",
		loadComponent: () => import("./pages/components-and-services"),
		title: "Components & Services",
	},
	{ path: "migrations", loadComponent: () => import("./pages/migrations"), title: "Migrations" },
	{ path: "**", redirectTo: "home" },
];
