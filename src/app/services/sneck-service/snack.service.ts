import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../../snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(public snack: MatSnackBar) { }

  showSnackBar() {
    return this.snack.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
