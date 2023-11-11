import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected?: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor: string;
  @HostBinding('style.color') private color: string;
  @HostBinding('style.fontWeight') private fontWeight: string;

  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = 'blue';
      this.color = 'white';
      this.fontWeight = '500';
    } else {
      this.backgroundColor = '';
      this.fontWeight = '';
      this.color = '';
    }
  }

  constructor() {
    this.appSelected = false;
    this.backgroundColor = 'white';
    this.fontWeight = '400';
    this.color = '#444';
  }
}
