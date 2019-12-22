import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingSpinnerComponent } from 'src/app/components/spinner/loading-spinner/loading-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  showOverlay(): void {

    this.overlayRef = this.overlay.create( {

      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true

    });

    this.overlayRef.attach( new ComponentPortal(LoadingSpinnerComponent));

  }

  hideOverlay(): void {

    this.overlayRef.detach();

  }

}
