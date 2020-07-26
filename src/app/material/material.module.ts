import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCardModule,
     MatTableModule,
     MatGridListModule,
     MatSelectModule,
     MatDividerModule,
     MatButtonModule,
     MatChipsModule ,
     MatIconModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatBottomSheetModule,
     } from '@angular/material';

@NgModule({

  exports: [MatCardModule,
      MatSelectModule,
      MatDividerModule,
      MatGridListModule,
      MatTableModule,
      MatButtonModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatRadioModule,
      MatBottomSheetModule,
      ],

})
export class MaterialModule { }
