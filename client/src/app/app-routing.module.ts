import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainService } from './main.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditSelfComponent } from './edit-self/edit-self.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EditOtherComponent } from './edit-other/edit-other.component';
import { MessageComponent } from './message/message.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { PokeComponent } from './poke/poke.component';




const routes: Routes = [
{path: "", pathMatch: "full", component: WelcomeComponent},
{path: "signin", pathMatch: "full", component: LoginComponent},
{path: "register", pathMatch: "full", component: RegisterComponent},
{path: "dashboard", pathMatch: "full", component: DashboardComponent},
{path: "edit", pathMatch: "full", component: EditSelfComponent},
{path: "addnew", pathMatch: "full", component: NewuserComponent},
{path: "edit_other/:id", pathMatch: "full", component: EditOtherComponent},
{path: "message/:id", pathMatch: "full", component: MessageComponent},
{path: "events", pathMatch: "full", component: EventDashboardComponent},
{path: "eventdetail/:id", pathMatch: "full", component: EventDetailComponent},
{path: "pokes", pathMatch: "full", component: PokeComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
