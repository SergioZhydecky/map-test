import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/item/1", pathMatch: "full" },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
