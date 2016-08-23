import {SingleFocusDispatcher} from "../src/services/formly.single.focus.dispatcher";
import {Field} from "./../src/templates/field";
import {FormlyPubSub} from "./../src/services/formly.event.emitter";
import {Component, Renderer, ViewChildren, QueryList, ElementRef} from "@angular/core";
import {FormlyMessages} from "./../src/services/formly.messages";

// Custom Input Field type 'toggle' Component Definition
@Component({
  selector: "formly-field-toggle",
  template: `
    <div [formGroup]="form">
      <div class="checkbox-toggle">
          <input id="checkbox" type="checkbox" type="checkbox" [formControlName]="key" (change)="inputChange($event, 'checked')" value="on">
          <label for="checkbox">
              <div></div>
          </label>
      </div>
  </div>
  `,
  queries: {inputComponent: new ViewChildren("inputElement")}
})
export class FormlyFieldToggle extends Field {

  constructor(fm: FormlyMessages, ps: FormlyPubSub, renderer: Renderer, focusDispatcher: SingleFocusDispatcher) {
    super(fm, ps, renderer, focusDispatcher);
  }

  inputComponent: QueryList<ElementRef>;

  protected setNativeFocusProperty(newFocusValue: boolean): void {
    if (this.inputComponent.length > 0) {
      this.renderer.invokeElementMethod(this.inputComponent.first.nativeElement, "focus", [newFocusValue]);
    }
  }
}
