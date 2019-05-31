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