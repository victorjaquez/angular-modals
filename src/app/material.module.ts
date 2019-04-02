import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModules, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})

export class MaterialModule{};

