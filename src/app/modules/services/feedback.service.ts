import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  snackDefaultSuccessMessage = 'Operação realizada com Sucesso.';
  snackDefaultErrorMessage = 'Falha ao carregar dados.';
  snackDefaultTime = 2000;
  constructor(
    public snackBar: MatSnackBar,
    public toastr: ToastrService,
    private route: Router
  ) {}

  loginRedirect(msg: string): void {
    if (msg === 'Please, log in to continue.') {
      setTimeout(() => {
        if (!this.route?.url.includes('/login')) {
          this.route.navigateByUrl('/login');
        }
      }, 150);
    }
  }

  showSuccessFeedback(msg?: string, title?: string): void {
    const messageTitle = title || 'Success!';
    const message = msg || this.snackDefaultSuccessMessage;

    this.toastr.success(message, messageTitle, {
      progressBar: true,
      positionClass: 'toast-bottom-left',
      timeOut: 2000,
    });
  }

  showWarningFeedback(msg?: string, title?: string, duration?: number): void {
    const messageTitle = title || 'Alert!';
    const message = msg;

    this.toastr.warning(message, messageTitle, {
      progressBar: true,
      positionClass: 'toast-bottom-left',
      timeOut: duration || 2000,
    });
  }

  showErrorFeedback(rej: any): void {
    if (rej?.errors && rej?.errors.length > 0) {
      rej?.errors.forEach((error: { message: { message: string } }) => {
        const { message } = error;
        if (typeof message === 'object') {
          this.toastr.error(message?.message, 'Error!', {
            progressBar: true,
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          });
          this.loginRedirect(message?.message);
        } else {
          this.toastr.error(message, 'Error!', {
            progressBar: true,
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          });
          this.loginRedirect(message);
        }
        return;
      });
    } else if (rej.error) {
      if (typeof rej?.error?.message === 'object') {
        rej?.error?.message.forEach((errorMessage: any) => {
          if (typeof errorMessage === 'object') {
            this.toastr.error(errorMessage?.message, 'Error!', {
              progressBar: true,
              positionClass: 'toast-bottom-left',
              timeOut: 2000,
            });
            this.loginRedirect(errorMessage?.message);
          } else {
            this.toastr.error(errorMessage, 'Error!', {
              progressBar: true,
              positionClass: 'toast-bottom-left',
              timeOut: 2000,
            });
            this.loginRedirect(errorMessage);
          }
          return;
        });
      } else {
        if (rej?.error.error && rej?.error.error.length > 0) {
          rej?.error?.error.forEach((err: string) => {
            this.toastr.error(err, 'Error!', {
              progressBar: true,
              positionClass: 'toast-bottom-left',
              timeOut: 2000,
            });
            this.loginRedirect(err);
          });
        } else {
          this.toastr.error(rej?.error?.message, 'Erro!', {
            progressBar: true,
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          });
          this.loginRedirect(rej?.error?.message);
        }
        return;
      }
    } else {
      this.toastr.error(this.snackDefaultErrorMessage, 'Error!', {
        progressBar: true,
        positionClass: 'toast-bottom-left',
        timeOut: 2000,
      });
    }
  }
}
