
# language: pt
@LogTeste
Funcionalidade: Testar as operacoes basicas de CRUD de log
  O sistema deve prover as operações básicas de inserção, exclusão, lista, remoção e obter um único registro do log

  Contexto: Cria todas as operações básicas CRUD do log e salvar no banco
    Dado que as lista de logs sejam gravadas
      | ip                         | status | agent      | request         |
      | 192.168.234.82             | 200    | swcd       | GET / HTTP/1.1  |
      | 192.168.169.194            | 201    | Mozilla    | GET / HTTP/1.1  |
      | 192.168.234.82             | 404    | swcd       | POST / HTTP/1.1 |

  Cenario: Verifica a quantidade de logs criados
    Dado o total de logs criadas
    Entao o total de logs e 3
