let cattleInfo = [];
let i;
const handleCattle = () => {
 
    fetch("http://localhost:2800/cattle")
    .then(res => res.json())
    .then(data => {
        console.log("cattle",data)
        const tableBody = document.getElementById("cattleTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].Co_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].Co_Type} </td>
            <td>${data[i].Co_Color}</td>
            <td>${data[i].Co_Gender}</td>
            <td>${data[i].Co_Weight} </td>
            <td>${data[i].Co_FoodIntake} </td>
            <td>${data[i].Co_MilkProduction} </td>
            <td>${data[i].Co_Shed_No} </td>
            <td>${data[i].Co_Status} </td>
            </tr>`
        }
        tableBody.innerHTML = dataHTML;
        })

}

const handleGoat = () => {
    fetch("http://localhost:2800/goat")
    .then(res => res.json())
    .then(data => {
        console.log("goat",data)
        const tableBody = document.getElementById("goatTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].G_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].G_Type} </td>
            <td>${data[i].G_Color}</td>
            <td>${data[i].G_Gender}</td>
            <td>${data[i].G_Weight} </td>
            <td>${data[i].G_FoodIntake} </td>
            <td>${data[i].G_MilkProduction} </td>
            <td>${data[i].G_Shed_No} </td>
            <td>${data[i].G_Status} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
}

const handleChicken = () => {
    fetch("http://localhost:2800/chicken")
    .then(res => res.json())
    .then(data => {
        console.log("chicken",data)
        const tableBody = document.getElementById("chickenTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].C_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].C_Type} </td>
            <td>${data[i].C_Number}</td>
            <td>${data[i].C_Breed}</td>
            <td>${data[i].C_FoodIntake} </td>
            <td>${data[i].C_AvgEggProd} </td>
            <td>${data[i].ShedNo} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}

const handleDuck = () => {
    fetch("http://localhost:2800/duck")
    .then(res => res.json())
    .then(data => {
        console.log("duck",data)
        const tableBody = document.getElementById("duckTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].D_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].D_Type} </td>
            <td>${data[i].D_Number}</td>
            <td>${data[i].D_Breed}</td>
            <td>${data[i].D_FoodIntake} </td>
            <td>${data[i].D_AvgEggProd} </td>
            <td>${data[i].ShedNo} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}
const handleFish = () => {
    fetch("http://localhost:2800/fish")
    .then(res => res.json())
    .then(data => {
        console.log("fiah",data)
        const tableBody = document.getElementById("fishTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].Fi_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].Fi_Type} </td>
            <td>${data[i].Fi_FoodIntake} </td>
            <td>${data[i].F_ReleasingTime}</td>
            <td>${data[i].F_Reproduction} </td>
            <td>${data[i].F_Num}</td>
            <td>${data[i].FishingTime} </td>
            <td>${data[i].PondNo}</td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}

// equipmentTable
const handleEquipment = () => {
    fetch("http://localhost:2800/equipment")
    .then(res => res.json())
    .then(data => {
        console.log("euipment",data)
        const tableBody = document.getElementById("equipmentTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].Eq_ID} </td>
            <td>${data[i].BuyingDate} </td> 
            <td>${data[i].E_Type} </td>
            <td>${data[i].E_Name} </td>
            <td>${data[i].Eq_Role}</td>
            <td>${data[i].Br_ID} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}

const handleEmployee = () => {
    fetch("http://localhost:2800/employee")
    .then(res => res.json())
    .then(data => {
        console.log("employee",data)
        const tableBody = document.getElementById("employeeTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].E_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].E_Name} </td>
            <td>${data[i].E_WorkingHour} </td>
            <td>${data[i].E_Salary}</td>
            <td>${data[i].E_Status}</td>
            <td>${data[i].E_Role} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}

const handleMonitoring = () => {
    fetch("http://localhost:2800/monitoring")
    .then(res => res.json())
    .then(data => {
        console.log("employee",data)
        const tableBody = document.getElementById("monitoringTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].M_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].Humidity} </td>
            <td>${data[i].Temperature} </td>
            <td>${data[i].WaterQuality}</td>
            <td>${data[i].Type}</td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}
const handleAdmin = () => {
    fetch("http://localhost:2800/admin")
    .then(res => res.json())
    .then(data => {
        console.log("employee",data)
        const tableBody = document.getElementById("adminTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].A_ID} </td>
            <td>${data[i].Login_ID} </td> 
            <td>${data[i].A_Name} </td>
            <td>${data[i].A_Email_ID} </td>
            <td>${data[i].A_Address}</td>
            <td>${data[i].A_Phone_No}</td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}

const handleBuyer = () => {
    fetch("http://localhost:2800/buyer")
    .then(res => res.json())
    .then(data => {
        console.log("employee",data)
        const tableBody = document.getElementById("buyerTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].B_ID} </td>
            <td>${data[i].Login_ID} </td> 
            <td>${data[i].B_Name} </td>
            <td>${data[i].B_Email_ID} </td>
            <td>${data[i].B_Address}</td>
            <td>${data[i].B_Phone_No}</td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}