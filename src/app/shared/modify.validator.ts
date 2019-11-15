import { AbstractControl, ValidatorFn } from "@angular/forms";

export function sameValueValidator(value: string): ValidatorFn {

    return (control: AbstractControl): {[key: string]: any} | null => {

        if( control.value === value ) {
    
            return { "sameValue": {value: control.value }};
    
        } else {
    
            return null;
    
        }
    
    };

}