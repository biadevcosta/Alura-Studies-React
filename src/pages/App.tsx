import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.scss"; //é um modulo que nunca tem sobreposicao

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	function selecionaTarefa(tarefaSelecionada: ITarefa) {
		setSelecionado(tarefaSelecionada);
		setTarefas((tarefasAnteriores) =>
			tarefasAnteriores.map((tarefa) => ({
				...tarefa,
				selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
			}))
		);
	}

	function finalizarTarefa() {
		if (selecionado) {
			setSelecionado(undefined);
			setTarefas((tarefasAnteriores) =>
				tarefasAnteriores.map((tarefa) => {
					if (tarefa.id === selecionado.id) {
						return {
							...tarefa,
							selecionado: false,
							completado: true,
						};
					}
					return tarefa;
				})
			);
		}
	}

	return (
		<div className={style.AppStyle}>
			{/* o nome da classe vai ser App_AppStyle_hashCodeAleatorio */}
			<Formulario setTarefas={setTarefas} />
			<Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
			<Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
		</div>
	);
}

export default App;
