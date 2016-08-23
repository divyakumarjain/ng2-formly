import {CommonModule} from "@angular/common";
import {FormlyForm} from "./components/formly.form";
import {FormlyField} from "../lib/components/formly.field";
import {NgModule} from "@angular/core";
import {FormlyTemplateComponentFactoryResolver} from "./services/formly.template.component.resolver";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FormlyPubSub} from "./services/formly.event.emitter";
export {FormlyCommon} from "./components/formly.common.component";
export {FormlyField} from "./components/formly.field";
export {FormlyFieldConfig} from "./components/formly.field.config";
export {FormlyForm} from "./components/formly.form";
export {FormlyConfig} from "./services/formly.config";
export {FormlyPubSub, FormlyEventEmitter} from "./services/formly.event.emitter";
export {FormlyMessage, FormlyMessages} from "./services/formly.messages";
export {FormlyFieldVisibilityDelegate} from "./services/formly.field.delegates"
export {FormlyProviders} from "./services/formly.providers";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [FormlyForm, FormlyField],
  exports: [FormlyForm],
  providers: [FormlyTemplateComponentFactoryResolver,
    FormlyPubSub]
})
export class FormlyCoreModule { }

