import { faker } from '@faker-js/faker'


export default {


    issue: function () {


        var data = {

            title: faker.company.bsBuzz(),
            description: faker.random.words(5),
            project: {
                name: `project-${faker.company.bsBuzz()}`,
                description: faker.random.words(5)
            }
        }
        return data
    }
  
}
