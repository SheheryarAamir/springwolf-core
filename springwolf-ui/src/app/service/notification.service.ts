/* SPDX-License-Identifier: Apache-2.0 */
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

export abstract class INotificationService {
  abstract showError(message: string): void;
  abstract showWarning(message: string): void;
}

@Injectable()
export class NotificationService implements INotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public showError(message: string) {
    this.snackBar.open(message, "Close", { verticalPosition: "top" });
  }

  public showWarning(message: string) {
    this.snackBar.open(message, "Close", { duration: 3000 });
  }
}
