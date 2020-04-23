# Desafio

Este projeto compõe o front-end e back-end. O back-end foi gerado pelo [Spring Initializr](https://start.spring.io/) com as bibliotecas `spring-boot-starter-web`, `postgres`, `lombok`, `mapstruct`, `swagger` e `spring-boot-starter-data-jpa`.

## Back-end
### EndPoints

* `api/logs`: POST - Inseri um log na base de dados.  <br />
Exemplo: 
````
{
	"request": "POST / HTTP/1.1",
	"ip": "222.112.27.22",
	"agent": "Chrome",
	 status: 200
}
````


* `api/logs/:id`: GET - Busca o log por id. <br />
Exemplo: 
````
localhost:8080/log/2
````
* `api/logs/:id`: DELETE -  Deleta um log. <br />

* `api/logs/:id`: PUT - Altera um log. <br />


### Test 
Foi aplicado o BDD com a biblioteca cucumber.


## Front-End
 O front end foi feito em angular versão 9. 
 O Formulário de Log valida se ip é requirido e se tem o formato de mascara 000.000.000, assim só será permitido na entrada
 dese campo um IP, caso contrário a inserção ou alteração não 
 acontecerá, além disto todos os status do HTTP são exibidos no <i>drop down list</i>.

 No formulário foi inserido o componente para fazer drag and drop de um arquivo log. 


## Execução
#### Executar a aplicação back-end na máquina física:
Abra o prompt de comando ou shell na raiz do projeto e faça a seguinte instrução:
`mvnw clean package && java -jar target/backend-0.0.1-SNAPSHOT.jar`, o sistema irá subir na porta 8080. </br>

Após subir o sistema para visualizar os endpoints insera este endereço no browser: `http://localhost:8080/swagger-ui.html`

#### Executar a aplicação front-end na máquina física:
Faça o seguinte comando:
`npm clean install` 

Em seguida o seguinte comando:
`ng serve`
