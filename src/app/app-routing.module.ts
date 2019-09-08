import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LembreteComponent } from "./components/lembrete/lembrete.component";

const routes: Routes = [
  { path: "lembretes", component: LembreteComponent },
  { path: "", redirectTo: "/lembretes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
