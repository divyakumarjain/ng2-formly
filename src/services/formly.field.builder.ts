

import {ComponentFactory, Injectable, ComponentRef} from "@angular/core";
import {FormlyFieldConfig} from "../components/formly.field.config";
import {FormlyConfig} from "./formly.config";
import {FormlyField} from "../components/formly.field";
import {Field} from "../templates/field";
import {FormlyTemplateComponentFactoryResolver} from "./formly.template.component.resolver"

@Injectable()
export class FormlyFieldBuilder {

  fc: FormlyConfig;

  constructor(protected cfr: FormlyTemplateComponentFactoryResolver) { }

  createChildFields(fieldConfig: FormlyFieldConfig, formlyField: FormlyField, formlyConfig: FormlyConfig): ComponentRef<Field> {
    // TODO support formlyField.field.hideExpression as a callback/observable
    formlyField.hide = fieldConfig.hideExpression ? true : false;

    let cf: ComponentFactory<Field> = this.cfr.resolveTemplateComponentFactory(formlyConfig.getDirective(fieldConfig.type));
    let ref = formlyField.myChild.viewContainer.createComponent(cf);
    ref.instance.model = formlyField.model;
    ref.instance.templateOptions = fieldConfig.templateOptions;
    ref.instance.key = formlyField.field.key;
    ref.instance.form = formlyField.form;
    ref.instance.update = formlyField.update;
    ref.instance.field = fieldConfig;
    ref.instance.formModel = formlyField.formModel;
    formlyField.form.addControl(formlyField.field.key, ref.instance.formControl);
    return ref;
  }
}
