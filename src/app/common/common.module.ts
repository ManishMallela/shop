import { NgModule } from '@angular/core';
import { CommonComponent } from './component/common/common.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [CommonComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [
    CommonComponent,
    FooterComponent,
    HeaderComponent,
    MatToolbarModule,
  ],
})
export class CommonModule {}
