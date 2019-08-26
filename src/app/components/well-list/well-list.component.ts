import { Component, ViewChild } from '@angular/core';
import { WellComponent } from '../well/well.component';

@Component({
    selector: 'app-well-list',
    templateUrl: './well-list.component.html'
})
export class WellListComponent {
    @ViewChild(WellComponent, {static: false }) child;
    isAddWell;
    wells = [{ name: 'TestRL', type: 'rls', srcKey: 11111}]
    srcKey = 111100;
    constructor() { }

    addWell(): void {
        this.isAddWell = true;
    }

    emitWell(value): void {
        // this.wells.push({name: this.child.addWellForm.value.name, type: this.child.addWellForm.value.type, srcKey: this.child.sourceKey.nativeElement.value})
        this.wells.push(value);
        this.isAddWell = false;
    }
}