import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'hero' ,component:HeroSectionComponent},
  {path:'about' ,component:AboutmeComponent},
  {path:'skills' ,component:SkillsComponent},
  {path:'projects' ,component:ProjectsComponent},
  {path:'footer' ,component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
