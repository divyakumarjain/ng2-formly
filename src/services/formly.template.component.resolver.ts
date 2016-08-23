import {Injectable, ComponentFactory} from "@angular/core";
import {Field} from "../templates/field";
import {ConcreteType} from "@angular/platform-browser/src/facade/lang";

@Injectable()
export class FormlyTemplateComponentFactoryResolver {
  private templateComponentFactories: TemplateComponentFactoryResolver[] = [];

  public resolveTemplateComponentFactory(component: ConcreteType): ComponentFactory<Field> {
    for (let templateComponentFactory: TemplateComponentFactoryResolver in this.templateComponentFactories) {
      let componentFactory: ComponentFactory<Field> = templateComponentFactory.resolveTemplateComponentFactory(component);
      if(componentFactory)
        return componentFactory;
    }
    return null;
  }

  addComponentFactoryResolver(templateComponentFactoryResolver: TemplateComponentFactoryResolver) {
    this.templateComponentFactories.push(templateComponentFactoryResolver);
  }
}

export interface TemplateComponentFactoryResolver {
  resolveTemplateComponentFactory(directive: ConcreteType): ComponentFactory<Field>;
}
