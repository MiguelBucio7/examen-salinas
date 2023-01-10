import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(mObjects: { name: string }[], input: string) {
    if (!input) return mObjects;
    return mObjects.filter(val => this.filterBy(val, input));
  }

  private filterBy(
    mObject: { name: string },
    search: string
  ) {
    const reduced = Object.keys(mObject)
      .reduce((prev, current) => this.reduceKeys(prev, current, mObject), "")
      .toLocaleLowerCase();
    return reduced.indexOf(search.toLocaleLowerCase()) > -1;
  }

  private reduceKeys(
    prev: string,
    current: string,
    mObject: { name: string }
  ): string {
    if (this.isProp(current)) {
      prev = `${prev}\$${mObject.name}`;
    }
    return prev;
  }

  private isProp(key: string): boolean {
    return key.includes("name");
  }


}
