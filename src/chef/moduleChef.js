
class Chef extends Owner{
    constructor(props) {
        super(props);
        const { experience, area, cv, lastJobs=[] } = props;
        this.experience = experience;
        this.area = area;
        this.cv = cv;    
        this.lastJobs = lastJobs;
    }
    cooking(){
        console.log("estoy cocinando");
    };
}

/* class ListOfEmployee {
    constructor({
        employees = []
    }) {
        this.employees = employees;
    }

}
const chefList = new ListOfEmployee({});
 */