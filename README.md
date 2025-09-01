<div><img center width="685" height="994" alt="Screenshot 2025-09-01 185717" src="https://github.com/user-attachments/assets/d3206300-dbc9-4fc7-a8bc-54ba847f643d" /></div>


# Calmaria Spa – Projeto Prático de Acessibilidade Web

Este projeto foi desenvolvido com o objetivo de aplicar e consolidar práticas de acessibilidade digital, seguindo as diretrizes técnicas do WCAG (Web Content Accessibility Guidelines). O foco é garantir que pessoas com deficiência física ou cognitiva possam navegar, compreender e interagir com a página de forma eficiente e segura.

## Características Principais

- Estrutura HTML semântica para melhor interpretação por tecnologias assistivas.
- CSS modular, com automatização da conversão de px para rem utilizando a biblioteca postcss-pxtorem, facilitando ajustes de escala e responsividade.
- Refatoração contínua do código para atender aos quatro princípios de acessibilidade: perceptível, operável, compreensível e robusto.
- Imagens com textos alternativos e contraste adequado para usuários com baixa visão.
- Navegação por teclado e foco visível para pessoas com limitações motoras.
- Linguagem clara e instruções objetivas para facilitar o uso por pessoas com deficiência cognitiva.

## Refatoração e Diretrizes Técnicas de Acessibilidade

O projeto foi revisado e ajustado para atender aos quatro princípios fundamentais do WCAG:

**Perceptível:**  
Conteúdo apresentado de forma clara, com contraste suficiente, textos alternativos em imagens e estrutura visual acessível.

**Operável:**  
Todos os elementos interativos podem ser acessados por teclado, com foco visível e navegação intuitiva.

**Compreensível:**  
Informações e instruções são apresentadas de forma simples e direta, evitando ambiguidades e facilitando o entendimento.

**Robusto:**  
Compatibilidade garantida com diferentes navegadores e tecnologias assistivas, como leitores de tela.

## Automatização da Conversão px para rem

Para agilizar o processo de refatoração e garantir conformidade com as recomendações do WCAG, foi utilizada a biblioteca postcss-pxtorem. Essa ferramenta converte automaticamente valores em px para rem, tornando o layout flexível e adaptável às configurações de acessibilidade dos usuários.

**Benefícios da automatização:**

- Facilita ajustes de tamanho para diferentes necessidades visuais.
- Garante responsividade e escalabilidade do design.
- Reduz o tempo de refatoração e minimiza erros manuais.

## Tecnologias Utilizadas

- HTML semântico
- CSS modular
- PostCSS com postcss-pxtorem
- Figma para prototipação
- Práticas de acessibilidade web

## Como Executar o Projeto

1. Instale as dependências do projeto:
   ```
   npm install
   ```
2. Escreva o CSS normalmente em px na pasta `styles/`.
3. Execute o comando para converter px para rem e gerar os arquivos finais:
   ```
   npm run build:css
   ```
4. Referencie os arquivos CSS da pasta `dist/` no HTML:
   ```html
   <link rel="stylesheet" href="dist/style.css" />
   ```
5. Abra o projeto em seu navegador e utilize ferramentas de acessibilidade para validação.

## Finalidade

Este projeto foi desenvolvido para prática e aprimoramento de técnicas de acessibilidade web, visando a inclusão digital de pessoas com diferentes tipos de deficiência. O objetivo é consolidar conhecimentos técnicos e promover a construção de interfaces
