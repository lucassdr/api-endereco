# **API de endereço**

##  Nome do projeto
-   **API Endereço**

##  Autor
-   [Lucas Sodré](https://github.com/lucassdr)

##  Descrição
-   API que através da passagem de N endereços através do método **POST** na URL **'/distancia'** retorna a latitude e longitude do endereço e, caso tenha mais de um endereço, retorna a distancia em KM entre os dois.
-   Também exibe os endereços mais próximos e mais longes.

###  Linguagem de programação
-   NodeJS

##  Executando o projeto
-   Realize o download do projeto ou execute o comando ```git clone https://github.com/lucassdr/api-endereco.git```
-   Após baixado o projeto, execute o comando ```npm install```
-   Vá ao arquivo ```configuracao.js``` dentro da pasta *config* e substitua o texto "API_KEY_DO_GOOGLE" pela sua *chave api* obtida
-   Para ligar o servidor local, com padrão na porta 3000, execute o comando ```nodemon app.js```
-   O projeto estará respondendo em *localhost:3000/distancia*

### Exemplo de requisição
```
curl -X POST \
  http://localhost:3000/distancia \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 66134422-54ef-4281-bd02-c0b1cda692da' \
  -H 'cache-control: no-cache' \
  -d '[
 "Avenida General Rondon, 346, Vila Leopoldina, Duque de Caxias, Rio de Janeiro, 25060236"
 , "Tv. Maj. Augusto Cesar, 10 - Eng. Belford, Sao Joao de Meriti - RJ, 25520-230"
 , "Rua Sao Clemente, 258, Botafogo, Rio de Janeiro"
 , "Rua Professor Jose de Souza Herdy, 1160 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ, 25071-202"
]'
```