import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    constructor() { }

    transform(products: any[], searchString: string): any[] {
        if (!searchString) {
            return products;
        }
        const result = [];
        products.filter(it => {
            console.log(it);
            if (it.name.toLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1) {
                result.push(it);
            }
        });
        return result;
    }

}
