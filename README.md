# TooDo List

Criando uma aplicação de React simples que permite ao usuário adicionar, remover e marcar tarefas como concluídas.

Componente Principal (App.jsx ou TodoList.jsx):

Este componente deve gerenciar uma lista de tarefas (strings ou objetos com id, texto e concluida) em seu estado.

Deve haver um campo de entrada de texto (<input type="text" />) para o usuário digitar uma nova tarefa.

Um botão "Adicionar Tarefa" deve permitir que o texto do input seja adicionado à lista de tarefas no estado.

A lista de tarefas deve ser renderizada abaixo, onde cada tarefa é um item.

Renderização da Lista de Tarefas:

Para cada tarefa na lista, exiba o texto da tarefa.

Ao lado de cada tarefa, adicione um botão "Remover" que, quando clicado, remova aquela tarefa específica do estado.

Adicione também uma checkbox ao lado de cada tarefa. Quando a checkbox é marcada/desmarcada, a tarefa deve ser atualizada no estado para refletir seu status de concluida (true/false).

O texto da tarefa deve ser tachado (text-decoration: line-through;) se estiver marcada como concluída.

Gerenciamento de Estado:

Utilize o Hook useState para gerenciar a lista de tarefas.

Utilize o Hook useState para gerenciar o valor do campo de entrada de nova tarefa (tornando-o um formulário controlado).

Lembre-se da imutabilidade do estado: ao adicionar, remover ou atualizar uma tarefa, você deve criar uma nova array ou objeto para o estado, em vez de modificar diretamente o estado existente.
