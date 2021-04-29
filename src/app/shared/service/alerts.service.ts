import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class AlertsService {

	constructor(
		private toastr: ToastrService
	) { }


	errors(message: string) {
		this.toastr.error(message)
	}

	saveSuccess(message: string) {
		return Swal.fire({
			title: 'ok',
			text: message,
			icon: 'success',
			confirmButtonText: 'ok',
			allowOutsideClick: false
		})
	}
}
