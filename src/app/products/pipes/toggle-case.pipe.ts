import { Pipe, PipeTransform } from "@angular/core";

//martin | toggleCase='MARTIN'

@Pipe({

  name:'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{

  /**transform(value: string, ...argr:any[]):string {
    console.log({args});
    return value.toUpperCase();
  }*/
  transform( value: string, toUpper: boolean = false ): string {

      return ( toUpper )
        ? value.toUpperCase()
        : value.toLowerCase();
  }

}
