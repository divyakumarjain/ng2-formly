import {NgModule, ComponentFactory, ComponentFactoryResolver} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyFieldInput} from "./formlyfield.input";
import {FormlyFieldCheckbox} from "./formlyfield.checkbox";
import {FormlyFieldRadio} from "./formlyfield.radio";
import {FormlyFieldSelect} from "./formlyfield.select";
import {FormlyFieldTextArea} from "./formlyfield.textarea";
import {FormlyFieldMultiCheckbox} from "./formlyfield.multicheckbox";
import {
  FormlyTemplateComponentFactoryResolver,
  TemplateComponentFactoryResolver
} from "../services/formly.template.component.resolver";
import {ConcreteType} from "@angular/common/src/facade/lang";
import {Field} from "./field";

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyFieldInput, FormlyFieldCheckbox, FormlyFieldRadio, FormlyFieldSelect, FormlyFieldTextArea, FormlyFieldMultiCheckbox],
  entryComponents: [FormlyFieldInput, FormlyFieldCheckbox, FormlyFieldRadio, FormlyFieldSelect, FormlyFieldTextArea, FormlyFieldMultiCheckbox]
})
export class FormlyBootstrapTemplateModule {

  constructor(protected tcfr: FormlyTemplateComponentFactoryResolver) {
    tcfr.addComponentFactoryResolver(FormlyBootstrapTemplateComponentFactoryResolver);
  }
}

export class FormlyBootstrapTemplateComponentFactoryResolver implements TemplateComponentFactoryResolver {

  constructor(protected cfr: ComponentFactoryResolver){};

  public resolveTemplateComponentFactory(component: ConcreteType): ComponentFactory<Field> {
    return this.cfr.resolveComponentFactory(component);
  }
}
