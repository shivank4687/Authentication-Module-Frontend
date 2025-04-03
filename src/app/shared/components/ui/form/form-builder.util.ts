import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export  function buildForm(config:any){
    let form:any={}
    for(const key of Object.keys(config))
    {
        const {value,required,min,max,email,min_length,max_length}=config[key];
        form[key]=[value||''];
        let validators=[]

        if(required){
            validators.push(Validators.required);
        }
        if(min==0||min){
            validators.push(Validators.min(min));
        }
        if(min_length){
            validators.push(Validators.minLength(min_length));
        }
        if(max_length){
            validators.push(Validators.maxLength(max_length));
        }
        
        if(max){
            validators.push(Validators.max(max));
        }

        if(email){
            validators.push(Validators.email);
        }

        form[key].push(validators);
    }
    return form;

}