import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  disableSend: boolean = false;
  
  constructor(private fb: FormBuilder, private service: SharedService,  private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.maxLength(500)]]
    })
  }

  sendMessage() {
    if(this.contactForm.valid) {
      this.disableSend = true;
      this.service.sendMessage(this.contactForm.value).catch(error=>{
        this.disableSend = true;
        this.snackbar.open(error, "Error", {
          duration: 5000
        });
        throw error
      }).then(() => {
        this.disableSend = false;
        this.snackbar.open("Message sent successfully", "Success", {
          duration: 5000
        });
      });
    }
  }
}
