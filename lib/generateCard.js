const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function generateCard(teamA) {
    var cardHTML = ``;
    
    teamA.forEach(element => {
        const role = element.getRole();
        var addInfo  = '';
        if( role === 'Manager') { 
            addInfo = 'Office number: ' + element.officeNum;
        } else if (role === 'Engineer') {
            addInfo = 'Github user name: ' + element.github; 
        } else if (role === 'Intern') {
            addInfo = 'School: ' + element.school;
        }
        cardHTML = cardHTML + ` 
        <div class="col-4 mt-5">
            <div class="card h-100">
                <div class="bg-primary text-white p-2">
                    <h2 class="name">${element.name}</h2>
                    <h3 class="role"><i class="fa  fa-solid fa-mug-hot"></i>${element.getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <p class="bg-white card-text m-0 p-3 border">ID: ${element.id}</p>
                    <p class="bg-white card-text m-0 p-3 border">Email:<a href="mailto:${element.email}">${element.email}</a></p>
                    <p class="bg-white card-text m-0 p-3 border">${addInfo}</p>
            </div>
            </div>
        </div>
        `
    });
    /*return `
    
            <div class="bg-primary text-white p-2">
                        <h2 class="engineer-name">Haile </h2>
                        <h3 class="engineer-title"><i class="fa fa-solid fa-glasses"></i> Engineer</h3>
                    </div>
                    <div class="card-body bg-light">
                        <p class="bg-white p-1 engineer-id card-text m-0 p-3 border">ID: 2</p>
                        <p class="bg-white p-1 engineer-email card-text m-0 p-3 border">Email: <a href="mailto:haile@gmail.com">haile@gmail.com</a></p>
                        <p class="bg-white p-1 engineer-github card-text m-0 p-3 border">Github: <a href="https://www.github.com/hthomp15" target="_blank">hthomp15</a></p>
                    </div>
                </div>
            </div>
            <div class="col-4 mt-5">
                <div class="card h-100">
                    <div class="bg-primary text-white p-2">
                        <h2 class="intern-name">Lacey</h2>
                        <h3 class="intern-title"><i class="fa fas fa-user-graduate"></i> Intern</h3>
                    </div>
                    <div class="card-body bg-light">
                        <p class="bg-white p-1 intern-id card-text m-0 p-3 border">ID: 3</p>
                        <p class="bg-white p-1 intern-email card-text m-0 p-3 border">Email: <a href="mailto:lacey@hotmail.com">lacey@hotmail.com</a></p>
                        <p class="bg-white p-1 intern-school card-text m-0 p-3 border">School: Princeton</p>
                    </div>
                </div>
            </div>`
*/
    return cardHTML;
}

module.exports = generateCard;