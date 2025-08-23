import { Component } from '@angular/core';

import { ApiIntegration } from './components/api-integration/api-integration';
import { Arraytask } from './components/arraytask/arraytask';
import { BootstrapNgfor } from './components/bootstrap-ngfor/bootstrap-ngfor';
import { ClickButton } from './components/click-button/click-button';
import { FormTemp } from './components/form-temp/form-temp';
import { Functiontask } from './components/functiontask/functiontask';
import { ImageComp } from './components/image-comp/image-comp';
import { ImageComponent } from './components/image-component/image-component';
import { NgforExample } from './components/ngfor-example/ngfor-example';
import { NgifExample } from './components/ngif-example/ngif-example';
import { Objecttask } from './components/objecttask/objecttask';
import { TwoWaybinding } from './components/two-waybinding/two-waybinding';
import { UserProfile } from './components/user-profile/user-profile';
import { Variabletask } from './components/variabletask/variabletask';

import { Alert } from './reusableCoponents/alert/alert/alert';
import { Btn } from './reusableCoponents/btn/btn';
import { RouterLink, RouterOutlet } from '@angular/router';








@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Variabletask,Objecttask,Arraytask,Functiontask,UserProfile,ImageComponent,ClickButton,TwoWaybinding,NgifExample,NgforExample,BootstrapNgfor,FormTemp,ApiIntegration,ImageComp,Alert,Btn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GfssAngularTask';
}
