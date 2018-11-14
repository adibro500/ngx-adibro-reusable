import { Component, OnInit, OnChanges, forwardRef, Input, ViewChild, ElementRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "ngx-adibro-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  @Input()
  items = ["abcd", "bghvgjhv", "c", "d"];
  @Input()
  placeholder;
  cacheItems;
  show;
  modelVal: any;
  @ViewChild('inputElement')
  inputEl: ElementRef;
  @Input("value") _value = "";
  onChange: any = () => {};
  onTouched: any = () => {};
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  constructor(public el:ElementRef) {
    this.cacheItems = this.items;
  }

  ngOnInit() {}

  showPanel(bool) {
    this.show = bool;
  }

  filterItems($evt) {
    if ($evt.length <= 0) {
      this.show = false;
      this.cacheItems = this.items;
    } else {
      let that = this;
      this.cacheItems = this.items.filter(item => {
        if (item.toLowerCase().indexOf($evt.toLowerCase()) > -1) {
          that.show = true;
          return true;
        }
      });
    }
  }

  selectValue(idx) {
    this.value = this.cacheItems[idx];
    this.onChange(this.value);
    this.inputEl.nativeElement.value = this.value;
    this.show = false;
  }
}
