import {Component, Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material';

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

@Component({
  selector: 'app-snack',
  templateUrl: 'app-snack.html',
  styles: [`
    .snack-class {
      color: white;
    }
  `],
})

export class SnackBarComponent {}
