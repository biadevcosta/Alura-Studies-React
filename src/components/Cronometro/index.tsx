import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa } : Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(()=>{ //valida se existe selecionado e tempo
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado]) //array de dependencias, sao todas dependencias que queremos que o useeffect use como base 
    // if(selecionado?.tempo){
    //     setTempo(tempoParaSegundos(selecionado.tempo));

    // } ISSO AQUI DÁ ERRO, VAI RENDERIZAR VARIAS VEZES, PQ É UM IF JOGADO 

    function regressiva(contador:number = 0){
        setTimeout(()=> {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro 
            </p>
            <div className={style.relogioWrapper}>
                <Relogio 
                tempo={tempo}/>
            </div>
            <Botao onClick={()=> regressiva(tempo)}
            >
                Começar
            </Botao>
        </div>
    )
}