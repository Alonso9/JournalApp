import { Login } from '@mui/icons-material';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({ })
    useEffect(() => {
      createvalidators();
    }, [ formState])

    const isFormValid = useMemo(() => {
        // console.log(formValidation);
        for (const formValue of Object.keys( formValidation )) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [ formValidation ])
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createvalidators = () => {
        const formCheckedValues = {};
        for(const formField of Object.keys( formValidations )){
            const [ fn, errorMessage='This flied is required.' ] = formValidations[ formField ];
            formCheckedValues[ `${ formField }Valid` ] = fn( formState[formField]) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation, // Esparcimos los campo que mandamos mas la palabra Valid y el error
        isFormValid,
    }
}

/*
  formCheckedValues[ `${ formField }Valid` ] Ahi computamos cada propiedad del
  objeto de forma que si recibimos la propiedad email computamos esa propiedad
  devolviendo ese nombre de la siguiente manera = emailValid, solo para tener
  el nombre tal como esta en el RegisterPage.
  fn( formState[formField]) ? null : errorMessage; en esa parte lo que hicimos 
  como tenemos la funcion para validar el campo destructurada como fn, entonces
  la llamamos, ahora el formState es un objeto que tiene nuestros inputs y mediante
  [formField] le decimos que solo los inputs que existen en nuestro formValidations se 
  cumplan y si se cumple da null para no mostrar el error caso contrario da el error, 
  de esa manera tenemos validaciones dinamicas.
  En la funcion isFormValid lo que hacemos es que recoremos todas la propiedades del objeto
  del form y si es diferente de null osea que tiene un error o mensaje de error pues
  retornamos falso y sino se hace el ciclo y retornamos true, esto para validar si todo nuestro 
  formulario es valido y ya mandar el formulario al backend
*/
