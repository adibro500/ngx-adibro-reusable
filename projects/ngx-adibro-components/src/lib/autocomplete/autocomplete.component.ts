import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

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

export class AutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  
  @Input()
  items: string[] = [];
  @Input()
  placeholder: string = "";
  @ViewChild('inputElement')
  inputEl: ElementRef;
  @Input("value") _value = "";

  cacheItems: any[] = [];
  show: boolean = false;
  scrollBarWidth: any;
  elWidth: any;
  modelVal: any;
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


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains( event.target )) {
      this.show = false;
  }
}


  constructor(public el:ElementRef) {
    this.cacheItems = this.items;
  }

  ngOnInit() {}
  
  ngAfterViewInit() {
    let width = 0;
    if (navigator.userAgent.indexOf("Firefox") > 0) {
      width = 0;
    } else {
    width  = 18;
    }
    this.elWidth = this.el.nativeElement.offsetWidth - width;
  }


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
    this.inputEl.nativeElement.focus();
    this.show = false;
  }

}

