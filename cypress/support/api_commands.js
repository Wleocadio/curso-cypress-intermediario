/// <reference types="Cypress" />

const acessToken = Cypress.env('gitlab_access_token') // constante que recebe o valor o token que está configurado no cypress.env.json para autorizar acesso via API
                                                      
Cypress.Commands.add('api_createProject', project =>{
    cy.request({
        method: 'POST', // envia uma requisição para cadastrar um projeto
        url:`api/v4/projects/?private_token=${acessToken}`, //'api/v4' é a versão da api utilizado
        body: { // envia nome, description e readme = true no corpo da requisição 
            name: project.name, // recebe o nome passado pelo "project"
            description: project.description,
            initialize_with_readme: true
        }

    })

}) 

Cypress.Commands.add('api_createIssue', issue => {
    cy.api_createProject(issue.project) // chama o comando de criação de projeto, passando os dodos pelo "issue.project"
      .then(response =>{ // utiliza o retorno em um request, para criar a issue do projeto criado anteriormente
        cy.request({
            method: 'POST',
            url: `api/v4/projects/${response.body.id}/issues?private_token=${acessToken}`, // pega o id da resposta da api que cria o projeto e utiliza passando como parametro para criar a issue
            body: {                                                                         
                title: issue.title,
                description: issue.description
            }
        })
      })

})

Cypress.Commands.add('api_createLabel', (projectId, label) =>{
    cy.request({
        method:'POST',
        url:`api/v4/projects/${projectId}/labels?private_token=${acessToken}`,
        body: {
            name: label.name,
            color: label.color
        }
    })
})

Cypress.Commands.add('api_createMilestone', (projectId, milestone) =>{
    cy.request({
        method: "POST",
        url:`api/v4/projects/${projectId}/milestones?private_token=${acessToken}`, 
        body: {title: milestone.title}

    })
})