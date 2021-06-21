import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    DetailsEstateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
