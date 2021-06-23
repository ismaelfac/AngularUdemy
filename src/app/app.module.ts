import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SumarComponent } from './components/sumar/sumar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { EstateComponent } from './components/estate/estate.component';
import { OwnersComponent } from './components/owners/owners.component';
import { InterestedEstateComponent } from './components/interested-estate/interested-estate.component';
import { PropertiesCapturedComponent } from './components/properties-captured/properties-captured.component';
import { GeneralDataComponent } from './components/estate/general-data/general-data.component';
import { LocationComponent } from './components/estate/location/location.component';
import { AreaComponent } from './components/estate/area/area.component';
import { ConditionComponent } from './components/estate/condition/condition.component';
import { DetailsEstateComponent } from './components/estate/details-estate/details-estate.component';
import { TemplateComponent } from './components/template/template.component';
import { ModelComponent } from './components/model/model.component';
import { GeneralDataFormsComponent } from './components/formsModels/general-data-forms/general-data-forms.component';
import { RentComponent } from './components/estate/rent/rent.component';
import { SaleComponent } from './components/estate/sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    CronometroComponent,
    UploadPageComponent,
    CalculatorComponent,
    EstateComponent,
    OwnersComponent,
    InterestedEstateComponent,
    PropertiesCapturedComponent,
    GeneralDataComponent,
    LocationComponent,
    AreaComponent,
    ConditionComponent,
    DetailsEstateComponent,
    TemplateComponent,
    ModelComponent,
    GeneralDataFormsComponent,
    RentComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
