import {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../sevices/carService";
import {IState} from "../../types/setStateType";

interface IProps {
    changeTrigger:()=>void;
    carForUpdate: ICar
    setCarForUpdate:IState<ICar>
}

const CarForm: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset,handleSubmit,register,setValue} = useForm<ICar>();

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand ,{shouldValidate:true})
            setValue('year',carForUpdate.year ,{shouldValidate:true})
            setValue('price',carForUpdate.price ,{shouldValidate:true})
        }
    }, [carForUpdate,setValue]);

    const save:SubmitHandler<ICar> = async (car)=>{
        await carService.create(car)
        changeTrigger();
        reset();
    }
    const update:SubmitHandler<ICar> = async (car) =>{
        await carService.updateById(carForUpdate.id,car)
        reset();
        changeTrigger();
        setCarForUpdate(null);
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {CarForm};