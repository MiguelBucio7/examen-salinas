import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: 'carousel',
    component: CarouselComponent,
    data: { title: 'Carousel' },
  },
  {
    path: 'list-employee',
    component: ListEmployeeComponent,
    data: { title: 'list-employee' },
  },
  {
    path: 'groups',
    component: GroupsComponent,
    data: { title: 'list-employee' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
