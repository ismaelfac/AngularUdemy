import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConditionComponent } from './components/estate/condition/condition.component';
import { DetailsEstateComponent } from './components/estate/details-estate/details-estate.component';
import { EstateComponent } from './components/estate/estate.component';
import { GeneralDataComponent } from './components/estate/general-data/general-data.component';
import { LocationComponent } from './components/estate/location/location.component';
import { InterestedEstateComponent } from './components/interested-estate/interested-estate.component';
import { ModelComponent } from './components/model/model.component';
import { OwnersComponent } from './components/owners/owners.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { path: 'inmuebles', component: EstateComponent },
  { path: 'inmuebles/:inmuebleId', component: DetailsEstateComponent, children: [
    { path: 'DatosGenerales', component: GeneralDataComponent },
    { path: 'localizacion', component: LocationComponent },
    { path: 'propietario', component: OwnersComponent },
    { path: 'interesados', component: InterestedEstateComponent },
    { path: 'Condiciones', component: ConditionComponent }
  ]},
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'modelosFormulario', component: ModelComponent },
  { path: 'templatesFormulario', component: TemplateComponent },
  { path: '**', redirectTo: 'inmuebles'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
