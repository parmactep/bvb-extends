import EmberObject from "@ember/object";
import discourseComputed from "discourse-common/utils/decorators";
import CreateAccountController from 'discourse/controllers/create-account';

export default {
  name: 'confirm-password',
  initialize: function() {
    CreateAccountController.reopen({
      @discourseComputed("accountPassword", "accountPasswordConfirmation")
      passwordConfirmationValidation(password, passwordConfirmation) {
        if (password === passwordConfirmation) {
          return EmberObject.create({
            ok: true,
            reason: ""
          });
        }
        return EmberObject.create({
          failed: true,
          reason: I18n.t("bvb-extends.password_confirm.error")
        });
      },
      @discourseComputed(
        "passwordConfirmationValidation.failed",
        "passwordRequired",
        "nameValidation.failed",
        "emailValidation.failed",
        "usernameValidation.failed",
        "passwordValidation.failed",
        "userFieldsValidation.failed",
        "formSubmitted",
        "inviteCode"
      )
      submitDisabled: function () { console.log('SUBM BUTTON', this.get("passwordConfirmationValidation.failed"));
        if (this.get("passwordConfirmationValidation.failed")) return true;
        return this._super();
      }
    })
  }
};
