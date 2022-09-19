import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1PPComponent } from './components/section1-pp/section1-pp.component';
import { Section2DescriptionComponent } from './components/section2-description/section2-description.component';
import { Section3BlogdetailsComponent } from './components/section3-blogdetails/section3-blogdetails.component';
import { Section4SubscriptionComponent } from './components/section4-subscription/section4-subscription.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MongodbComponent } from './pages/mongodb/mongodb.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
// import { AppComponent } from './app.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path:'',  redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'mongodb', component: MongodbComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentRouting = [
  HeaderComponent,
  FooterComponent,
  Section1PPComponent,
  Section2DescriptionComponent,
  Section3BlogdetailsComponent,
  Section4SubscriptionComponent,
  AboutComponent,
  BlogsComponent,
  MongodbComponent,
  HomePageComponent
]