
function addChef() {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const experience = document.getElementById("experience").value;
    const area = document.getElementById("area").value;
    const cv = document.getElementById("cv").value;
    const job1 = document.getElementById("job1").value;
    const job2 = document.getElementById("job2").value;
    const job3 = document.getElementById("job3").value;

    const newChef = new Chef({
        name: name,
        lastName:lastName,
        age: age,
        phoneNumber: phoneNumber,
        experience: experience,
        area: area,
        cv: cv,
        lastJobs: [job1,job2,job3],
    });

    

    let chefs = JSON.parse(localStorage.getItem('chefs')) || [];
    chefs.push(newChef);
    localStorage.setItemetItem('chefs', JSON.stringify(chefs));



    
    let chefs2 = JSON.parse(localStorage.getItem('chefs'));
    alert("Chef added successfully!");
    console.log(chefs2);
}



