## API DA COPA DO MUNDO !! 

  Seja bem-vindo à API da COPA DO MUNDO! Esse projeto foi realizado pelos seguintes participantes:

    Brendon Augusto de Souza Nogueira
    Eduardo Faria Caetano Silva
    
  Trabalho demandado pelo professor Rodrigo, com intuito de criar uma API com conexão a um banco de dados PostgreSQL via conteinerização e utilização de GitHub Actions e Docker Compose. Trabalho com data de entrega de 15/11/2022.
  
### Puxar o Código

  Inicialmente você deve puxar o código do Github para sua máquina, dando o comando na pasta em que você vai desenvolver o projeto:
 
    git clone https://github.com/Brendon-Nogueira/api-world_cup.git
    
  Após esse comando, será gerado uma nova pasta com o nome do repositório que você clonou. Para executar os próximos comandos, você deve estar dentro da pasta do projeto. Use o seguinte comando:

    cd api-world_cup/
    
### Preparações para rodar a API

  Após clonar o projeto e estar na raiz do projeto, você deve baixar algumas dependências de node_modules. Para isso, execute o comando:

    npm i -y
    
  Você deverá verificar se criou uma pasta chamada node_modules. Quaisquer erros durante instalação, visite a [documentação do Node](https://docs.npmjs.com/creating-node-js-modules) para realizar testes e verificar o que possa estar errado no download dessa biblioteca.

  Além disso, você deve ter o docker instalado na sua máquina. Verifique o sistema operacional da sua máquina e então faça o download dele de acordo com o mesmo:
  
  - [Linux - Ubuntu/Debian](https://docs.docker.com/engine/install/ubuntu/)
  - [Windows](https://docs.docker.com/desktop/install/windows-install/)

  Após a instalação do docker, você pode gerar a imagem através do seguinte comando:
  
     docker build . -t brendonasn/api_world-cup:1.0.0
     
  Caso prefira uma imagem pronta, execute o seguinte comando:
  
      docker pull brendonasn/api_world-cup
      
### Rodando a API
 
  Com a imagem do projeto pronta, execute o seguinte comando para rodar o projeto:
    
      docker-compose up
      
   > **_Caso seja sua primeira vez rodando, ele fará algumas instalações. Não se assuste com a lentidão!_** 

### Testando a API

  A API tem algumas funções básicas conforme requisitos do projeto. Isso incluí:
  
  - **Criação de partidas;**
  - **Atualização de partidas;**
  - **Remoção de partidas;**
  - **Listagem de todas as partidas;**
  - **Listagem de uma partida específica;**
  - **Listagem de partidas por dia;**
  - **Listagem de partidas por seleção.**

  Segue abaixo como requisitar cada funcionalidade. Todas elas funcionam através de endpoints.
  
  ## Criação de Partidas
  
      localhost:8087/api/v1/world_cup
      
   Exemplo de corpo do JSON:
   
      {
        "id": 6,
        "time_m": "Holanda",
        "time_v": "Gana",
        "data_partida": "2022-11-30",
        "placar_mandante": 1,
        "placar_visitante": 4
       }    
   
  ## Atualização de Partidas
  
      localhost:8087/api/v1/world_cup/:id
      
   Exemplo de requisição do endpoint:
   
      localhost:8087/api/v1/world_cup/6
      
   Exemplo de corpo do JSON:
   
      {
        "id": 6,
        "time_m": "Holanda",
        "time_v": "Gana",
        "data_partida": "2022-12-04",
        "placar_mandante": 1,
        "placar_visitante": 7
       }  
      
  ## Remoção de Partidas
  
    localhost:8087/api/v1/world_cup/:id
    
  Exemplo de requisição do endpoint:
  
    localhost:8087/api/v1/world_cup/6
    
  ## Listagem de Todas as Partidas
  
    localhost:8087/api/v1/world_cup
    
  ## Listagem de Partida Específica
  
    localhost:8087/api/v1/world_cup/:id
    
  Exemplo de requisição do endpoint:
   
    localhost:8087/api/v1/world_cup/6
   
  ## Listagem de Partida por Data
   
    localhost:8087/api/v1/world_cup/:date
    
  Exemplo de requisição do endpoint:
   
    localhost:8087/api/v1/world_cup/2022-11-24
    
  ## Listagem de Partidas por Seleção
   
    localhost:8087/api/v1/world_cup/time/:partidaTime
    
  Exemplo de requisição do endpoint:
   
    localhost:8087/api/v1/world_cup/time/Alemanha
    
    
  

