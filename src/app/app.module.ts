import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';
import { FormShortAnswerComponent } from './form-short-answer/form-short-answer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MultipleChoicesComponent } from './multiple-choices/multiple-choices.component';
import { ShortAnswerExerciseComponent } from './short-answer-exercise/short-answer-exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    ShortAnswerComponent,
    LogoutComponent,
    FormShortAnswerComponent,
    FeedbackComponent,
    MultipleChoicesComponent,
    ShortAnswerExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
