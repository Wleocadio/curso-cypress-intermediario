import { faker } from '@faker-js/faker'

export default {


    project: function () {
        
        var data = {
        
            
            name: `project-${faker.company.bsBuzz()}`,
            description: faker.random.words(5)
        
    }
        return data
    }

}