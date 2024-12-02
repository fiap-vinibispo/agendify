# Projeto: Agendify

## Autores

- **Alexandre Colvet Delfino RM 560059**
- **Enzo Luciano Barros de Oliveira RM 559557**
- **Felipe Gomes Molinari Lopes RM 559885**
- **Lívia Pereira Dias Correa RM 559414**
- **Vinícius Ferreira Bispo RM 560188**

O **Agendify** é um sistema de gestão de agendamentos, desenvolvido como parte do desafio da Challenge Sprint do 1º semestre de Engenharia de Software da FIAP. Este projeto foi realizado para as disciplinas de **Frontend Design** e **Web Development**, com o objetivo de criar uma aplicação funcional que atenda a cenários reais de agendamentos.

Esta é a **landing page do Agendify**, que inclui um pequeno demo interativo para apresentar as funcionalidades básicas do sistema.

---

## Descrição

O **Agendify** foi projetado para facilitar a gestão de agendamentos em diversos cenários, como clínicas, escolas, ou sistemas corporativos. Ele oferece funcionalidades que tornam o processo de organização mais eficiente, permitindo:
- Cadastrar pacientes/clientes.
- Exibir uma lista de agendamentos com informações detalhadas.
- Buscar e filtrar registros por diversos critérios.
- Visualizar dados complementares, como histórico de atendimentos e informações pessoais, ao selecionar um registro.

---

## Pitch do produto

https://youtube.com/shorts/8_TLHBMDPG4?feature=share

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do projeto.
- **CSS3**: Estilização da aplicação.
- **JavaScript**: Funcionalidades dinâmicas e manipulação de DOM.

---

## Organização do Código

1. **Estrutura de Diretórios**:
   - `index.html`: Arquivo principal da landing page.
   - `assets/stylesheets`: Contém os arquivos CSS responsáveis pela estilização do projeto.
     - `main.css`: Arquivo principal com estilos globais.
     - Outros arquivos CSS organizados por seções ou componentes.
   - `src/main.js`: Ponto de entrada do JavaScript.
   - `src/components`: Contém os arquivos JavaScript organizados por componentes funcionais.
   - `assets/images/<section>`: Diretório com as imagens utilizadas no projeto, organizadas por seção (e.g., `home`, `system`, `services`).

2. **Classe Table**:
   - Criada para facilitar a renderização da tabela e suas funcionalidades (busca, filtro, visualização de detalhes).

3. **Web Componente ImageWithText**:
  - Criado para facilitar a inserção de imagens com textos "dentro" delas

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/fiap-vinibispo/agendify.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd agendify
   ```
3. Abra o arquivo `index.html` em um navegador.
