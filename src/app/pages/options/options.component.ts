import {Component, ViewEncapsulation} from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { OptionsService } from './options.service';

@Component({
  selector: 'options',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [require('./options.scss')],
  template: require('./options.html'),
})
export class Options {

	public authForm:FormGroup;
	public userName:AbstractControl;
	public userSlogan:AbstractControl;
	public userGravatar:AbstractControl;
	public userPassword:AbstractControl;
	public userNewPassword:AbstractControl;
	public userRelNewPassword:AbstractControl;

  constructor(private _fb: FormBuilder,
  						private _optionsService: OptionsService) {
		this.authForm = _fb.group({
			'userName': ['', Validators.compose([Validators.required])],
			'userSlogan': ['', Validators.compose([Validators.required])],
			'userGravatar': ['', Validators.compose([Validators.required])],
			'userPassword': [''],
			'userNewPassword': [''],
			'userRelNewPassword': [''],
		});
		this.userName = this.authForm.controls['userName'];
		this.userSlogan = this.authForm.controls['userSlogan'];
		this.userGravatar = this.authForm.controls['userGravatar'];
		this.userPassword = this.authForm.controls['userPassword'];
		this.userNewPassword = this.authForm.controls['userNewPassword'];
		this.userRelNewPassword = this.authForm.controls['userRelNewPassword'];
	}

  public uploadCompleted() {
  	console.log('上传图片完成');
  }

	// 提交权限表单
	public submitAuthForm(values: any) {
		if (this.authForm.valid) {
			console.log(this.authForm);
			// this.putAuth(this.authForm.value);
		}
	}

	// 更新权限

	// 更新设置
	public putAuth(auth: any) {
		this._optionsService.putAuth(auth)
		.then(_auth => {
			console.log(_auth);
			this.authForm.reset({
				userName: _auth.name,
				userSlogan: _auth.slogan,
				userGravatar: _auth.gravatar,
				userPassword: '',
				userNewPassword: '',
				userRelNewPassword: ''
			});
		})
		.catch(error => {});;
	}
}
