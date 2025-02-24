
let employeeDetails = [];

function removeall(){
    employeeDetails = [];
    uimaker();
}

function remove(index) {
    employeeDetails.splice(index, 1);
    uimaker();
}


function uimaker() {
    let employeeTableBody = document.getElementById(`employeeTableBody`)
    employeeTableBody.innerHTML = '';
    employeeDetails.map((ele,i)=> {
        let td0 = document.createElement(`td`)
        td0.innerHTML = i + 1
        let td1 = document.createElement('td');
        td1.innerHTML = ele.name
        let td2 = document.createElement('td');
        td2.innerHTML = ele.number
        let td3 = document.createElement('td');
        td3.innerHTML = ele.email
        let td4 = document.createElement('td');
        td4.innerHTML = ele.experience
        let td5 = document.createElement('td');
        td5.innerHTML = ele.salary
        let td6 = document.createElement('td');
        td6.innerHTML = ele.jobRoll
        let td7 = document.createElement('td');
        td7.innerHTML = ele.experienceLabel
        let img = document.createElement('img'); 
        img.src = ele.profileImg;
        let td8 = document.createElement('td');
        td8.append(img)
        let td9 = document.createElement('button');
        td9.addEventListener('click', ()=> remove(i));
        
            

        let tr = document.createElement('tr');
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9)
        document.getElementById('employeeTableBody').append(tr)
    
}
);

}

document.getElementById("details").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById('exampleInputname').value;
    let number = document.getElementById('exampleInputnumber').value;
    let email = document.getElementById('exampleInputemail1').value;
    let experience = document.getElementById('exampleInputexperience').value;
    let salary = document.getElementById('exampleInputsalary').value;
    let jobRoll = document.getElementById('Jobroll').value;
    let profileImg = document.getElementById('exampleInputimg').value;
    
    let experienceLabel = '';
    if (experience < 3) {
        experienceLabel = 'Junior';
    } else if (experience >= 2 && experience < 5) {
        experienceLabel = 'Mid-level';
    } else if (experience >= 5) {
        experienceLabel = 'Senior';
    }

    let newEmployee = {
        name: name,
        number: number,
        email: email,
        experience: experience,
        experienceLabel: experienceLabel,
        salary: salary,
        jobRoll: jobRoll,
        profileImg: profileImg
    };
    
    employeeDetails.push(newEmployee);
    uimaker()
});



