

document.addEventListener('DOMContentLoaded', function() {

    let chefs = JSON.parse(localStorage.getItem('chefs'));
    if (chefs) {
            showEmployees(chefs)
        
    } else {
        console.log("No hay empleados");
    }
});
    



function showEmployees(chefs) {
    chefs.map((chef) => {
        console.log(chef)
        let moreInfo = document.createElement('button');
        let list = document.getElementById("employee");
        moreInfo.className = 'bg-transparent h-8 w-32 text-sm mx-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded';
        moreInfo.textContent =  chef.name ;
        list.appendChild(moreInfo);
        let index = chefs.indexOf(chef);
        moreInfo.addEventListener('clicked', function () {
            localStorage.setItem('index', index);
            window.location = "details.html";
        });
        
    });
};

/* chef.lastJobs.map((job) => {
    document.write(job.nameOfJob, "<br>");
    document.write(job.position, "<br>");
    document.write("<br>", "--------------------------------","<br>");
}) */
