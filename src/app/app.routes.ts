import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'contacts', component: ContactsComponent}
    
];

