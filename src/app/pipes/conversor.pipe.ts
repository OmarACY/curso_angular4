import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(value: number, por: number){

        let result = "La multiplicación: " + value + " x " + por + " = " + (value * por);

        return result;
    }
}