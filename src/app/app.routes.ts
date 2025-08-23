import { Routes } from '@angular/router';
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

import { ApiIntegration } from './components/api-integration/api-integration';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './components/gurads/auth-guard';
import { PostForm } from './components/postform/post-form';

export const routes: Routes = [
   // deafult route

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login

    },
    {
        path:'',
        component: Layout,
        children: [
            {
                path: 'variabletask',
                component: Variabletask,
                canActivate:[authGuard]
            },
    {
        path: 'object',
        component: Objecttask
    },
    {
        path:'array',
        component:Arraytask
    },
    {
        path: 'function',
        component: Functiontask
    },
    {
        path: 'user',
        component: UserProfile
    },
    {
        path:'image',
        component:ImageComponent

    },
    {
        path: 'click',
        component:ClickButton
    },
    {
        path: 'twoway',
        component: TwoWaybinding
    },
    {
        path: 'ngif',
        component: NgifExample
    },
    {
        path: 'ngfor',
        component: NgforExample
    },
    {
        path: 'bootstrap',
        component: BootstrapNgfor
    },
    {
        path:'api',
        component:ApiIntegration

    },
    {
       path:'pform/:id',
       component:PostForm
    }
    // {
    //     path:'pform/:id',
    //     component:PostForm
    // }
]
    }
   

    


];
