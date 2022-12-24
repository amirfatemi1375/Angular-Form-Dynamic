import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/core/services/api/home/home.service';
import { SignUpService } from 'src/app/core/services/api/sign-up/sign-up.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  model: any;
  isLoadForm: Promise<boolean>;
  formModel: FormGroup;
  constructor(
    private homeService: HomeService,
    private signUpService: SignUpService
  ) {}
  ngOnInit(): void {
    this.getFormFields();
  }
  getFormFields() {
    this.homeService.getFormFields().subscribe((res: any) => {
      this.isLoadForm = Promise.resolve(true);
      this.model = res.model;
    });
  }
  getFormData(event: any) {
    this.formModel = new FormGroup(event);
  }
  onSubmit() {
    if (this.formModel.invalid) {
      return;
    }
    this.signUpService.post('post', this.formModel.value).subscribe((res) => {
      this.formModel.reset();
    });
  }
}
