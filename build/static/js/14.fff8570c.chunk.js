(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[14],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return T}));var r=n(12),o=n(42),i=n(265),a=n(328),E=n(325),u=(n(324),n(9),n(329)),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function E(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,E)}u((r=r.apply(e,t||[])).next())}))},_=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function E(i){return function(E){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(E){i=[6,E],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,E])}}},s=new o.a("S3ImagePicker"),T=function(){function e(e){var t=this;Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=a.a.Public,this.headerTitle=E.a.IMAGE_PICKER_TITLE,this.headerHint=E.a.IMAGE_PICKER_HINT,this.placeholderHint=E.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=E.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return c(t,void 0,void 0,(function(){var t,n,r,o,i,a,E,c,T,l;return _(this,(function(_){switch(_.label){case 0:n=(t=this).path,r=void 0===n?"":n,o=t.level,i=t.track,a=t.identityId,E=t.fileToKey,c=r+Object(u.b)(e,E),_.label=1;case 1:return _.trys.push([1,4,,5]),[4,Object(u.e)(c,e,o,i,e.type,s)];case 2:return _.sent(),T=this,[4,Object(u.c)(c,o,i,a,s)];case 3:return T.src=_.sent(),[3,5];case 4:throw l=_.sent(),s.error(l),new Error(l);case 5:return[2]}}))}))}}return e.prototype.render=function(){return Object(r.i)(r.b,null,Object(r.i)("slot",{name:"photo-picker"},Object(r.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:i.a.get(this.headerTitle),headerHint:i.a.get(this.headerHint),placeholderHint:i.a.get(this.placeholderHint),buttonText:i.a.get(this.buttonText)})))},e}()},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return P})),n.d(t,"k",(function(){return a})),n.d(t,"l",(function(){return T})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return A})),n.d(t,"o",(function(){return O})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return c})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return _})),n.d(t,"t",(function(){return i})),n.d(t,"u",(function(){return E})),n.d(t,"v",(function(){return r}));var r="username",o="email",i="code",a="phone",E="password",u="country-dial-code-select",c="+1",_="amplify-auth-source",s="amplify-redirected-from-hosted-ui",T="amplify-authenticator-authState",l="Phone number can not be empty",f="No Auth module found, please ensure @aws-amplify/auth is imported",A="No Storage module found, please ensure @aws-amplify/storage is imported",d="No Interactions module found, please ensure @aws-amplify/interactions is imported",L="SETUP_TOTP",O="User has not set up software token mfa",I="User has not verified software token mfa",S="SUCCESS",p="auth",C="UI Auth",h="ToastAuthError",P="AuthStateChange"},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,o,i=n(21);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var a=Object.assign(Object.assign(Object.assign({},r),i.a),o)},328:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Public="public",e.Private="private",e.Protected="protected"}(r||(r={}))},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return s}));var r=n(324),o=n(9),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function E(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,E)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function E(i){return function(E){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(E){i=[6,E],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,E])}}},E=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,o=e.type,i=encodeURI(n);return t&&((i="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)))||(i="empty_key")),i.replace(/\s/g,"_")},c=function(e,t,n,E,u){return i(void 0,void 0,void 0,(function(){var i,c;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.a.get(e,{level:t,track:n,identityId:E})];case 2:return i=a.sent(),u.debug("Storage image get",i),[2,i];case 3:throw c=a.sent(),new Error(c);case 4:return[2]}}))}))},_=function(e,t,n,E,u){return i(void 0,void 0,void 0,(function(){var i,c;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,o.a.get(e,{download:!0,level:t,track:n,identityId:E})];case 2:return i=a.sent(),u.debug(i),[4,(_=i.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(_)})))];case 3:return[2,a.sent()];case 4:throw c=a.sent(),new Error(c);case 5:return[2]}var _}))}))},s=function(e,t,n,E,u,c){return i(void 0,void 0,void 0,(function(){var i,_;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.put)throw new Error(r.n);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.a.put(e,t,{contentType:u,level:n,track:E})];case 2:return i=a.sent(),c.debug("Upload data",i),[3,4];case 3:throw _=a.sent(),new Error(_);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=14.fff8570c.chunk.js.map