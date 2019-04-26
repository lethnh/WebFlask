import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter2'
})
@Injectable()
export class FilterPipe2 implements PipeTransform {
    constructor() { }

    transform(items: any[], searchString: string): any[] {
        if (!searchString) {
            return items;
        }
        console.log(items);
        const result = [];
        items.filter(it => {
            console.log(it);
            if (it.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                result.push(it);
                console.log(result);
            }
        });
        return result;
    }
}