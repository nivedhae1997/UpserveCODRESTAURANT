import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilter implements PipeTransform {
  public transform(items: any[], searchText: any, isFrom?: any): any[] {
    if(!items) return [];
    if(!searchText) return items;
    // if(isFrom == 'currencyType') {
      console.log("is from inside", items);
      return items.filter( it => {
        if(it.command && it.commandName) {
          return it.command.toLowerCase().includes(searchText.toLowerCase())
            || it.commandName.toLowerCase().includes(searchText.toLowerCase());
        }
            
    });

  }

}
