import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-well',
    templateUrl: './well.component.html'
})
export class WellComponent implements OnInit {
    @ViewChild('sourceKey', { static: true }) sourceKey;
    @Input() srcKey;
    @Output() emitWell = new EventEmitter();
    addWellForm = new FormGroup({
        name: new FormControl(''),
        type: new FormControl('')
    });

    constructor() { }

    ngOnInit(): void {
        this.addWellForm.addControl('srcKey', new FormControl({ value: this.srcKey, disabled: true }));
    }

    onSubmit() {
        this.emitWell.emit({ name: this.addWellForm.value.name, type: this.addWellForm.value.type, srcKey: this.sourceKey.nativeElement.value })
        this.addWellForm.reset();
    }

}