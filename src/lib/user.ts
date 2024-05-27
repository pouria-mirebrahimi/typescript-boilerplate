import { ValidateArguments } from './decorators/validation.decorator';
import { Enumerable } from './decorators/enumerable.decorators';
import { IsEnum } from './decorators/isenum.decorator';
import { Required } from './decorators/required.decorator';
import { Deprecated } from './decorators/deprecated.decorator';

@ValidateArguments
export class User {
  @IsEnum(['Generic', 'Private'])
  private _userType: string;

  @Required
  private _email: string;

  public username: string;
  public addressLine1: string = '';
  public addressLine2: string = '';
  public country: string = '';

  constructor(username: string, email: string, userType?: string) {
    this.username = username;
    this._email = email;

    if (userType) this._userType = userType;
  }

  @Enumerable(false)
  get userType() {
    return this._userType;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  get addressComplete() {
    return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
  }

  @Deprecated('Use accessor "addressComplete" instead.')
  address(): any {
    return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
  }
}
