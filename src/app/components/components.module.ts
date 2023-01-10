import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { SearchPipe } from '../@shared/directives/search.pipe';

@NgModule({
  declarations: [ CarouselComponent, ListEmployeeComponent, GroupsComponent, SearchPipe ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    ComponentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgDragDropModule.forRoot()
  ],
  exports: [
    CarouselComponent,
    ListEmployeeComponent,
    GroupsComponent
  ]
})
export class ComponentsModule { }
