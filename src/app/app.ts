import { Component, twoWayBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variabletask } from './components/variabletask/variabletask';
import { Objecttask } from './components/objecttask/objecttask';
import { Arraytask } from './components/arraytask/arraytask';
import { Functiontask } from './components/functiontask/functiontask';
import { UserProfile } from './components/user-profile/user-profile';
import { ImageComponent } from './components/image-component/image-component';
import { ClickButton } from './components/click-button/click-button';
import { TwoWaybinding } from './components/two-waybinding/two-waybinding';
import { NgifExample } from './components/ngif-example/ngif-example';
import { NgforExample } from './components/ngfor-example/ngfor-example';
import { BootstrapNgfor } from './components/bootstrap-ngfor/bootstrap-ngfor';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Variabletask,Objecttask,Arraytask,Functiontask,UserProfile,ImageComponent,ClickButton,TwoWaybinding,NgifExample,NgforExample,BootstrapNgfor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GfssAngularTask';
}
