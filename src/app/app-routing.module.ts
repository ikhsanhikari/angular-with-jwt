import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { MultipleChoicesComponent } from './multiple-choices/multiple-choices.component';
import { ShortAnswerExerciseComponent } from './short-answer-exercise/short-answer-exercise.component';


const routes: Routes = [
  {path:'',component: WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'welcome/:name',component: WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'login',component: LoginComponent},
  {path:'short-answer',component:ShortAnswerComponent,canActivate:[RouteGuardService]},
  {path:'multiple-choice',component:MultipleChoicesComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'feedback',component:FeedbackComponent,canActivate:[RouteGuardService]},

  {path:'short-answer-exercise',component:ShortAnswerExerciseComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent,canActivate:[RouteGuardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
