import {ICar} from "../../interfaces/carInterface";
import {FC} from "react";
import {Car} from "./Car";
import {IState} from "../../types/setStateType";

interface IProps{
    cars:ICar[];
    setCarForUpdate:IState<ICar>;
    changeTrigger:()=>void;
}

const Cars:FC<IProps> = ({cars, setCarForUpdate, changeTrigger}) => {

    return (

        <div>
            {cars.map(car=><Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>).reverse()}
        </div>
    );
};

export {Cars};