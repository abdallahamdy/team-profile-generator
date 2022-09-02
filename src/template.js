// create the about section
const generateCards = employees => {
    var htmlContent = '';
    
    for(var i = 0; i < employees.length; i++){
        var role = employees[i].getRole();

        if(role.includes('Manager')){
            htmlContent += 
                '<div class="card" style="width: 18rem;">' +
                '<div class="card-body">' +
                '<h2 class="card-title employee-name">' + employees[i].name + '</h2>' +
                '<h6>Manager</h6>' + 
                '<p class="card-text">ID: ' + employees[i].id + ' </p>' +
                '<p class="card-text">Email: ' + employees[i].email+ ' </p>' +
                '<p class="card-text">Office Number: ' + employees[i].officeNumber + ' </p>' +
                '</div>' +
                '</div>';
        } else if(role.includes('Engineer')){
            htmlContent += 
                '<div class="card" style="width: 18rem;">' +
                '<div class="card-body">' +
                '<h2 class="card-title employee-name">' + employees[i].name + '</h2>' +
                '<h6>Engineer</h6>' + 
                '<p class="card-text">ID: ' + employees[i].id + ' </p>' +
                '<p class="card-text">Email: ' + employees[i].email+ ' </p>' +
                '<p class="card-text">Github: ' + employees[i].github + ' </p>' +
                '</div>' +
                '</div>';
        } else if(role.includes('Intern')){
            htmlContent += 
                '<div class="card" style="width: 18rem;">' +
                '<div class="card-body">' +
                '<h2 class="card-title employee-name">' + employees[i].name + '</h2>' +
                '<h6>Intern</h6>' + 
                '<p class="card-text">ID: ' + employees[i].id + ' </p>' +
                '<p class="card-text">Email: ' + employees[i].email+ ' </p>' +
                '<p class="card-text">School: ' + employees[i].school + ' </p>' +
                '</div>' +
                '</div>';
        }
    }
  
    return htmlContent;
};

module.exports = employeeList => {
    // destructure page data by section
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header class="title-container">
          <h1 class="page-title">My Team</h1>
      </header>
      <main class="content">
        ${generateCards(employeeList)}
      </main>
    </body>
    </html>
    `;
};