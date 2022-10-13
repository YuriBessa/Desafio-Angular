# Dashboard Ford

**Descrição:** SPA (Single-Page Application) desenvolvido em Angular com 3 módulos (Login, Home e Dashboard), solicitado como requisito para conclusão da Programa de Formação em TIC - Trilha Front-End, do SENAI CIMATEC-BA.

**Tecnologias utilizadas:** HTML, CSS, Bootstrap, TypeScript, Angular 14 e RxJS, versionamento em Git e GitHub.

**A página de login contém:**
1. Formulário para aquisição de nome e senha.
2. Botão para confirmar o login.
3. O módulo login é responsável buscar os dados de usuário cadastrado no back-end e gerar autenticação no sistema.

Ao efetuar o login, o sistema fornecerá acesso à página de home. 

**A página Home contém:**
1. Cartão central com com informação de boas-vindas ao sistema.
2. Ícone no lado superior direito que aciona barra lateral oculta, onde está o botão de logout e o status do usuário logado.
3. Ícone do lado superior esquerdo (barra tripla ou "hamburguer") que aciona outra barra lateral oculta, com o menu de navegação contendo os links para a página home e para a página dashboard.
4. Uma imagem de fundo.

**A Página Dashboard contém:**
1. Um menu dropdown para selecionar os veículos pelo nome do modelo (Ranger, Territory, Mustang, Bronco Sport). As opções para preenchimento são buscadas numa API REST.
2. Três cartões apresentando os dados de total de vendas, número de veículos conectados ao sistema Ford e número de veículos com software atualizado. Essas informações devem ser atualizadas de acordo com o modelo selecionando no primeiro cartão.
3. Uma imagem, no centro da página, do veículo correspondente ao selecionado no primeiro cartão.
4. Uma tabela com um campo de busca digitável, por código VIN do veículo, e cinco campos de apresentação de dados.
- Endereço da busca: `http://localhost:3000/vehicleData`.
- Exemplo de código do veículo: 2FRHDUYS2Y63NHD22454

**Conceitos postos em prática:**
- Utilização de modules, components, routings, services, interceptors e guards, do Angular;
-	Estilização em CSS e Bootstrap (básico);
-	Menus laterais (sidebars) ocultos acionados por Ícones clicáveis: menu navegação e menu com status de usuário logado e botão logout;
-	Utilização de dashboard, cards, imagens, tabelas interativas e menu dropdown.
-	Comunicação da aplicação com API REST para duas finalidades: 
1.	Obtenção de dados para autenticação de login de usuários (tela de login), 
2.	Obtenção de informações de veículos (mostradas na tela do dashboard e na tabela interativa);

**Segue abaixo a documentação gerada pelo Angular CLI:**


----------------------------------------------------------------------------------------------------------------------------------------

## DashboardFord

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
