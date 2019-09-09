# Lembrarme

## Descrição da stack do projeto
- Biblioteca ngRx para manuseio de estado, usado para listar lembretes, inserir e alterar, despachando ações que alteram a coleção utilizada pela tabela e inserindo/editando lembrete.
- Angular Material como biblioteca visual
- Seguindo o princípio de utilizar as ferramentas do angular, a paginação e filtragem são feitos pela tabela do angular material, que dispõe destes recursos através do MatTableDataSource
- Utilização do Flex Layout para estruturação do layout
- Reactive Forms para controle dos formulários de inserção e alteração
- RxJs utilizado para tratar os effects

# Fluxo de funcionamento da tabela
- Na iniciação do componente, é despachada a ação GetLembretesRequest que requisita à API os dados de lembretes
- Um Effect intercepta essa requisição, e em caso de sucesso, despacha a ação de sucesso GetLembretesSuccess
- O reducer pega os dados do payload da ação GetLembretesSuccess e atualiza a lista de lembretes

# Fluxo de funcionamento da inserção e edição
- Quando o formulário é enviado, uma ação é despachada que envia à API os dados de lembretes para inserção/edição
- Um Effect intercepta essa requisição, e em caso de sucesso, despacha a ação de sucesso correspondente
- O reducer pega os dados do payload da ação e atualiza a lista de lembretes, em caso de edição, verifica o id do payload e altera o correspondente na lista

## Instruções para instalação do projeto
- Clone o projeto
- Na pasta raiz, execute o comando `npm i`
- Ainda na raiz, execute o comando `ng serve`
- Na pasta /src, execute o comando `json-server --watch db.json` para iniciar a api 
- Acesse a URL `http://localhost:4200/`
