import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputNumber]'
})
export class InputNumberDirective {

  constructor() { }
  @HostListener('focus', ['$event'])
  focus(event:any){
    console.log("focus")
  }
  @HostListener('blur', ['$event'])
  blur(event:any){
    console.log("salio")
  }
  @HostListener('keydown', ['$event'])
  deshabilitarletras(event: any){
    const keyCode = event.keyCode;
    console.log(keyCode)

    // Verificar si la tecla presionada es numérica, una tecla de eliminación o una tecla de edición
    const isNumber = (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
    const isDelete = keyCode === 8 || keyCode === 46;
    const isNavigation = keyCode === 37 || keyCode === 39 || keyCode === 35 || keyCode === 36;

    console.log(isNavigation)
    console.log(isDelete)
    console.log(isNumber)
    // Permitir la entrada si la tecla presionada es numérica, una tecla de eliminación o una tecla de edición
    if (isNumber || isDelete || isNavigation) {
      return;
    }

    // Cancelar la acción predeterminada de escritura si la tecla presionada no es numérica, una tecla de eliminación o una tecla de edición
    event.preventDefault();
  }

}
