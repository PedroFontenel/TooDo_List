import { useState } from "react";
import './TooDoList.css'
export default function TooDoList(){
    const [tarefas, setTarefas] = useState([]);
    const [nova_tarefa, setNova_tarefa] = useState("");

    function adicionar_tarefa(){
        if(nova_tarefa.trim()==="") return;
        const tarefa = {
            id: Date.now(),
            texto: nova_tarefa,
            concluida: false
        }
        setTarefas([...tarefas,tarefa])
        setNova_tarefa("")
    }

    function remover_tarefa(id){
        const tarefas_atualidadas = tarefas.filter((tarefa)=> tarefa.id !== id)
        setTarefas(tarefas_atualidadas)
    }

    function alternar_conclusao(id){
        setTarefas(tarefas.map((tarefa)=>{
            tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa}))
    }

    return(
        <div id="principal">
            <h1>Lista</h1>
            <div id="secundaria">
                <input type="text" value={nova_tarefa} onChange={(e)=>setNova_tarefa(e.target.value)}/>
                <button onClick={adicionar_tarefa}>Adicionar Tarefa</button>
            </div>
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        <input
                            type="checkbox"
                            checked={tarefa.concluida}
                            onChange={() =>
                                setTarefas(
                                    tarefas.map((t) =>
                                        t.id === tarefa.id
                                            ? { ...t, concluida: !t.concluida }
                                            : t
                                    )
                                )
                            }
                        />
                        {tarefa.texto}
                        <button onClick={()=>remover_tarefa(tarefa.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}