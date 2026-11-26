# Git-Flow

1*Configuração inicial do Git

# Configurar nome do usuário
git config --global user.name "Seu Nome"

# Configurar e-mail
git config --global user.email "seuemail@gmail.com"

# Verificar configurações
git config --list

2*Criar e clonar repositórios

# Iniciar um repositório Git
git init

# Clonar um repositório do GitHub
git clone https://github.com/usuario/repositorio.git

# Verificar o estado dos arquivos
git status

3*Adicionar arquivos e criar commits

# Adicionar um arquivo específico
git add README.md

# Adicionar todos os arquivos
git add .

# Criar um commit
git commit -m "mensagem do commit"

# Visualizar histórico de commits
git log

# Visualizar histórico resumido
git log --oneline

4*Enviar e atualizar arquivos no GitHub

# Enviar alterações para o GitHub
git push

# Enviar pela primeira vez uma branch
git push -u origin main

# Baixar atualizações do repositório remoto
git pull

# Buscar atualizações sem mesclar
git fetch

# Adicionar repositório remoto
git remote add origin https://github.com/usuario/repositorio.git

# Verificar repositórios remotos
git remote -v

5*Criar e trocar de branches

# Listar branches
git branch

# Criar uma nova branch
git branch nome-da-branch

# Trocar de branch
git checkout nome-da-branch

# Criar e trocar de branch ao mesmo tempo
git checkout -b nome-da-branch

# Alternativa moderna para trocar de branch
git switch nome-da-branch

# Criar e trocar de branch
git switch -c nome-da-branch

# Excluir uma branch
git branch -d nome-da-branch

6*Mesclar branches

# Trocar para a branch principal
git switch main

# Mesclar outra branch na atual
git merge nome-da-branch

# Enviar alterações para o GitHub
git push

7*Corrigir e desfazer commits

# Corrigir a mensagem do último commit
git commit --amend -m "nova mensagem"

# Adicionar arquivos esquecidos ao último commit
git add .
git commit --amend --no-edit

# Desfazer alterações de um arquivo
git restore nome-do-arquivo

# Retirar arquivo da área de preparação
git restore --staged nome-do-arquivo

# Desfazer o último commit mantendo as alterações
git reset --soft HEAD~1

# Desfazer o último commit e manter alterações fora da preparação
git reset --mixed HEAD~1

# Criar um commit que desfaz outro commit
git revert HEAD

8*Git Flow

O Git Flow é uma metodologia de organização do desenvolvimento de projetos utilizando branches.

Principais branches:

main: contém a versão estável do projeto.

develop: reúne as funcionalidades em desenvolvimento.

feature: utilizada para desenvolver novas funcionalidades.

release: utilizada para preparar uma nova versão.

hotfix: utilizada para corrigir erros urgentes na versão principal.

EX:

# Criar branch develop
git branch develop

# Entrar na branch develop
git switch develop

# Criar uma branch de funcionalidade
git switch -c feature/cadastro

# Adicionar alterações
git add .

# Criar commit
git commit -m "feat: criar cadastro"

# Voltar para develop
git switch develop

# Mesclar a funcionalidade
git merge feature/cadastro

9*Comandos adicionais

# Limpar o terminal
clear

# Ver diferenças nos arquivos
git diff

# Ver diferenças dos arquivos preparados
git diff --staged

# Consultar ajuda de um comando
git help commit

# Excluir uma branch remota
git push origin --delete nome-da-branch


OBJETIVO:

Praticar os principais comandos do Git e GitHub, aprender a trabalhar com branches, commits, correções e aplicar o fluxo Git Flow no desenvolvimento de projetos.
