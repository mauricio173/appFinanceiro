//Receber o seletor do formulário
var subForm = document.getElementById("formTransacoes");

// Aguardar usuário clicar no botão ENVIAR
subForm.addEventListener("submit", (e) => {

	// Não recarregar página
	e.preventDefault();

	//Receber dados do usuário
	var nome_usuario = 	document.getElementById("nome_usuario").value;
	var valor_usuario = document.getElementById("valor_usuario").value;
	var selectTipo = document.getElementById("selectTipo").value;
	var selectCategoria = document.getElementById("selectCategoria").value;
  var selectConta = document.getElementById("selectConta").value;
	console.log(nome_usuario);
	console.log(valor_usuario);
	console.log(selectTipo);
	console.log(selectCategoria);
  console.log(selectConta);
  
  // Transforar valor em FLOAT 
  // valor_usuario = Number.parseFloat(document.getElementById("valor_usuario"));
  
  // Criar array de objetos
	let transacoes = new Array();

	// Verifica se a propriedade está no LocalStorage
if(localStorage.hasOwnProperty("transacoes")){		
	// Recuperar valores da propriedade transacoes do localStorage
	// Converte STRING para OBJETOS
transacoes = JSON.parse(localStorage.getItem("transacoes"))}
  
  // Adicionar novo objeto no Array selecionado
	transacoes.push({nome_usuario, valor_usuario, selectTipo, selectCategoria, selectConta});
  
  	// Salva no localStorage
	localStorage.setItem("transacoes", JSON.stringify(transacoes));
	
    //Mostrar registro de transações
    /*document.getElementById("regTransacoes").insertAdjacentHTML('beforeend', "Nome: " + nome_usuario + "<br>Valor: " + valor_usuario + "<br>Tipo: " + selectTipo + "<br>Categoria: " + selectCategoria + "<br>Conta: " + selectConta + "<br><hr>");*/
  
   //document.getElementById("regTransacoes").insertAdjacentHTML('beforeend', "<br>" + "Nome: " + nome_usuario + "<br>Valor: R$ " + valor_usuario + "<br>Tipo: " + selectTipo + "<br>Categoria: " + selectCategoria + "<br>Conta: " + selectConta + "<br><br><hr><br>");
  
 document.getElementById("regTransacoes").insertAdjacentHTML('beforeend', `<br> Nome: ${nome_usuario} <br> Valor: R$ ${valor_usuario} <br> Tipo: ${selectTipo} <br> Categoria: ${selectCategoria} <br> Conta: ${selectConta} <br><br><hr>` ); 

  // Remover os registros do localStorage
  //localStorage.removeitem("transacoes");
 
	 //Limpar campos apos enviado
	 document.getElementById("nome_usuario").value = "";
	 document.getElementById("valor_usuario").value = "";
	 document.getElementById("selectTipo").value = "";
	 document.getElementById("selectCategoria").value = "";
   document.getElementById("selectConta").value = "";
});

// Função para adicionar uma novo tipo
function addTipo() {
  var selectTipo = prompt("Digite o tipo da transação:");
  var selectElement = document.getElementById("selectTipo");

  // Crie um novo elemento de opção com o nome da categoria inserido
  var optionElement = document.createElement("option");
  optionElement.text = selectTipo;
  
  while (selectTipo === "") {
  alert("Nenhum nome digitado. Por favor digite um nome para o novo tipo de transação.");
  return
}
  // Adicione o novo elemento de opção ao elemento de seleção
  selectElement.add(optionElement);
};


// Função remover Tipo de operação
function removeTipo() {
  var selectElement = document.getElementById("selectTipo");
  var selectedIndex = selectElement.selectedIndex;

 if (selectedIndex !== -1) {
   const confirmDelete = confirm(`Tem certeza que deseja remover o tipo selecionado? A remoção não pode ser desfeita.`)
   if(confirmDelete == 1) {
    selectElement.remove(selectedIndex);
    alert("Tipo removido com sucesso.");
   }
}
};

// Função editar Tipo de operação
function editarTipo() {
  var selectElement = document.getElementById("selectTipo");
  var selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    const confirmEdit = confirm(`Tem certeza que deseja editar o tipo selecionado?`)
    
    if (confirmEdit == 1) {
    var category = prompt("Digite o novo nome de tipo:");
    selectElement.options[selectedIndex].text = category;
    alert("Tipo editado com sucesso.");  
    }
  }
};

//

// Função para adicionar uma nova conta
function addConta() {
  var selectConta = prompt("Digite a categoria da transação:");
  var selectElement = document.getElementById("selectConta");

  // Crie um novo elemento de opção com o nome da conta inserido
  var optionElement = document.createElement("option");
  optionElement.text = selectConta;
  
  while (selectConta === "") {
  alert("Nenhum nome digitado. Por favor digite um nome para a nova categoria.");
  return
}
  // Adicione o novo elemento de opção ao elemento de seleção
  selectElement.add(optionElement);
};


// Função remover Conta
function removeConta() {
  var selectElement = document.getElementById("selectConta");
  var selectedIndex = selectElement.selectedIndex;

 if (selectedIndex !== -1) {
   const confirmDelete = confirm(`Tem certeza que deseja remover a conta selecionada? A remoção não pode ser desfeita.`)
   if(confirmDelete == 1) {
    selectElement.remove(selectedIndex);
    alert("Conta removida com sucesso.");
   }
}
};

// Função editar Tipo de operação
function editarConta() {
  var selectElement = document.getElementById("selectConta");
  var selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    const confirmEdit = confirm(`Tem certeza que deseja editar a conta selecionada?`)
    
    if (confirmEdit == 1) {
    var conta = prompt("Digite o novo nome de conta:");
    selectElement.options[selectedIndex].text = conta;
    alert("Conta editada com sucesso.");  
    }
  }
};

//

// Função para adicionar uma nova categoria
function addCategoria() {
  var selectCategoria = prompt("Digite a categoria da transação:");
  var selectElement = document.getElementById("selectCategoria");

  // Crie um novo elemento de opção com o nome da categoria inserida
  var optionElement = document.createElement("option");
  optionElement.text = selectCategoria;
  
  while (selectCategoria === "") {
  alert("Nenhum nome digitado. Por favor digite um nome para a nova categoria.");
  return
}
  // Adicione o novo elemento de opção ao elemento de seleção
  selectElement.add(optionElement);
};


// Função remover Categoria
function removeCategoria() {
  var selectElement = document.getElementById("selectCategoria");
  var selectedIndex = selectElement.selectedIndex;

 if (selectedIndex !== -1) {
   const confirmDelete = confirm(`Tem certeza que deseja remover a categoria selecionada? A remoção não pode ser desfeita.`)
   if(confirmDelete == 1) {
    selectElement.remove(selectedIndex);
    alert("Categoria removida com sucesso.");
   }
}
};

// Função editar Categoria
function editarCategoria() {
  var selectElement = document.getElementById("selectCategoria");
  var selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    const confirmEdit = confirm(`Tem certeza que deseja editar a categoria selecionada?`)
    
    if (confirmEdit == 1) {
    var categoria = prompt("Digite o novo nome de categoria:");
    selectElement.options[selectedIndex].text = categoria;
    alert("Categoria editada com sucesso.");  
    }
  }
};

var histTransacoes = document.getElementById('histTransacoes');
var main = document.getElementById('main');
var regTransacoes =  document.getElementById('regTransacoes');
regTransacoes.style.left = "0" 

histTransacoes.style.textAlign = "center"
main.style.textAlign = "center"
