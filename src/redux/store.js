import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from './userSlice';


 // esta configuración del store usa un objeto reducer, el puede dividir el estado Global en pequeñas slides o porciones según la escala del proyecto, ejm: autentication user, SIM app, configure App, en este ejemplo usamos solo user
export const store = configureStore({
  reducer: {
    user: useReducer,
  } 
})