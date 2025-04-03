import { provideComponentStore } from '@ngrx/component-store';
import { importProvidersFrom } from '@angular/core';
import { ButtonComponent, InputComponent, ModalComponent, TableComponent } from './index';

export const provideSharedUI =  [
  importProvidersFrom(ButtonComponent,TableComponent),
//   importProvidersFrom(InputComponent),
//   importProvidersFrom(ModalComponent),
//   importProvidersFrom(TableComponent),
];