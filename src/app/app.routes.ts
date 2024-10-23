import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyGymScheduleComponent } from './mygymschedule/mygymschedule.component';
import { MyRoutineComponent } from './myroutine/myroutine.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home',component:HomeComponent},
    {path:'mygymschedule',component:MyGymScheduleComponent},
    {path: 'myroutine',component:MyRoutineComponent},
    {path:'contact',component:ContactComponent},
    {path:"",redirectTo:'/home',pathMatch:"full"}
];
