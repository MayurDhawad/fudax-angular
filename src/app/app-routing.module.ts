import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { AddCoinComponent } from './components/add-coin/add-coin.component';
import { IcoComponent } from './components/ico/ico.component';
import { SupportComponent } from './components/support/support.component';
import { FaqComponent } from './components/faq/faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'exchange', component:ExchangeComponent},
  {path:'add-coin', component:AddCoinComponent},
  {path:'ico', component:IcoComponent},
  {path:'support', component:SupportComponent},
  {path:'faq', component:FaqComponent},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents =  [
                                      HomeComponent,
                                      HeaderComponent,
                                      FooterComponent,
                                      LoginComponent,
                                      SignupComponent,
                                      ExchangeComponent,
                                      AddCoinComponent,
                                      IcoComponent,
                                      SupportComponent,
                                      FaqComponent,
                                      PageNotFoundComponent
                                  ]
