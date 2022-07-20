import { faker } from '@faker-js/faker'

export default {

       
        label: function () {


            var data = {
                name: faker.company.bsBuzz(),
                color: '#ffaabb'
                
            }
            return data
        }
        
    }

