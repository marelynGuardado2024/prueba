class Owner extends User{
    constructor(props) {
        super(props);
        const { dui, phoneNumber } = props;
        this.dui = dui;
        this.phoneNumber = phoneNumber;
    }
}

const Erick = new Owner({
    name: "Erick",
    lastName: "Zelaya",
    age: 18,
    dui: "987654321",
    phoneNumber: 78441235   
});
    


