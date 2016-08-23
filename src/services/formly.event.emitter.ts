import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";


export class FormlyValueChangeEvent {
  constructor(public key: string, public value: any) {}
}

export class FormlyEventEmitter extends Subject<String> {
  constructor() {
    super();
  }
  emit(value) {
    super.next(value);
  }
}

@Injectable()
export class FormlyPubSub {
  Stream: FormlyEventEmitter;
  emitters = {};
  updated = false;
  constructor() {
    this.Stream = new FormlyEventEmitter();
  }

  getUpdated() {
    return this.updated;
  }
  setUpdated(value) {
    this.updated = value;
  }

  setEmitter(key, emitter) {
    this.emitters[key] = emitter;
  }

  getEmitter(key) {
    return this.emitters[key];
  }
}
