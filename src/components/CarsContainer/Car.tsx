import {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";
import {IState} from "../../types/setStateType";
import {carService} from "../../sevices/carService";

interface IProps {
    car:ICar
    setCarForUpdate:IState<ICar>
    changeTrigger:()=>void
}

const Car:FC<IProps> = ({car,setCarForUpdate, changeTrigger}) => {
    const {id, price, year, brand} = car;

    const deleteById = async () =>{
        await carService.delete(id);
        changeTrigger();
    }

    return (
  <div>
      <div>id:{id}</div>
      <div>price:{price}</div>
      <div>year:{year}</div>
      <div>brand:{brand}</div>
      <button onClick={()=>setCarForUpdate(car)}>Update</button>
      <button onClick={deleteById}>DELETE</button>
      <hr/>
  </div>
 );
};

export {Car};