let cattleInfo = [];
let i;
const handleCattle = () => {

    fetch("http://localhost:2800/cattle")
        .then(res => res.json())
        .then(data => {
            console.log("cattle", data)
            const tableBody = document.getElementById("cattleTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
                dataHTML += `<tr> 
            <td>${data[i].Co_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].Co_Type} </td>
            <td>${data[i].Co_Gender}</td>
            <td>${data[i].Co_Color}</td>
            <td>${data[i].Co_Weight} </td>
            <td>${data[i].Co_MilkProduction} </td>
            <td>${data[i].Co_FoodIntake} </td>
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
            console.log("goat", data)
            const tableBody = document.getElementById("goatTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("chicken", data)
            const tableBody = document.getElementById("chickenTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("duck", data)
            const tableBody = document.getElementById("duckTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("fiah", data)
            const tableBody = document.getElementById("fishTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("euipment", data)
            const tableBody = document.getElementById("equipmentTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
const handleproduct = () => {
    fetch("http://localhost:2800/avlproduct")
        .then(res => res.json())
        .then(data => {
            console.log("euipment", data)
            const tableBody = document.getElementById("productTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
                dataHTML += `<tr> 
            <td>${data[i].P_ID} </td>
            <td>${data[i].P_Type} </td>
            <td>${data[i].P_Name} </td>
            <td>${data[i].P_Amount} </td> 
            <td>${data[i].P_Price}</td>
            </tr>`
            }
            console.log(dataHTML)
            tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}
const handlesupply = () => {
    fetch("http://localhost:2800/supply")
        .then(res => res.json())
        .then(data => {
            console.log("euipment", data)
            const tableBody = document.getElementById("supplyTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
                dataHTML += `<tr> 
            <td>${data[i].Fo_ID} </td>
            <td>${data[i].Fo_Name} </td>
            <td>${data[i].Fo_Type} </td>
            <td>${data[i].Fo_For} </td> 
            <td>${data[i].Price}</td>
            <td>${data[i].Br_ID}</td>
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
            console.log("employee", data)
            const tableBody = document.getElementById("employeeTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("employee", data)
            const tableBody = document.getElementById("monitoringTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("employee", data)
            const tableBody = document.getElementById("adminTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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
            console.log("employee", data)
            const tableBody = document.getElementById("buyerTable");
            let dataHTML = "";
            for (let i = 0; i < data.length; i++) {
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


// CATTLE UPDATE, INSERT, DELETE

// CATTLE ALL MODAL SHOW
const cattleUpdateFunc = () => {
    document.getElementById("cattleUpdateModal").style.display = "block"
    console.log("updateclick")
}
const cattleInsertFunc = () => {
    document.getElementById("cattleInsertModal").style.display = "block"
}

const cattleDeleteFunc = () => {
    document.getElementById("deleteCattleModal").style.display = "block"
}

// CATTLE ALL MODAL CLOSE
const cattleUpdateClose = () => {
    document.getElementById("cattleUpdateModal").style.display = "none"
}
const cattleInsertClose = () => {
    document.getElementById("cattleInsertModal").style.display = "none"
}

const cattleDeleteClose = () => {
    document.getElementById("deleteCattleModal").style.display = "none"
}

// UPDATE
var cattleUpdateInfo = [];
// GET COW ID
const CowID = document.getElementById("C_ID");
CowID.addEventListener('blur', (e) => {
    console.log(e.target.value);
    cattleUpdateInfo[0] = e.target.value;
})

// GET UPDATE FIELD NAME
const cFieldUpdate = document.getElementById("cattleUpdate");
cFieldUpdate.addEventListener('change', (e) => {
    console.log('value', e.target.value);
    cattleUpdateInfo[1] = e.target.value;
    console.log(cattleUpdateInfo)
})

// GET UPDATE DATA
const cValue = document.getElementById("cFieldValue");
cValue.addEventListener('blur', (e) => {
    console.log(e.target.value);
    cattleUpdateInfo[2] = e.target.value;
    console.log(cattleUpdateInfo);
})
console.log(cattleUpdateInfo)

// POST UPDATE DATA TO DATABASE
const handleCattleUpdate = () => {
    console.log("click")
    fetch('http://localhost:2800/updatecattle', {
        method: 'POST',
        body: JSON.stringify(cattleUpdateInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        document.getElementById("cattleUpdateModal").style.display = "none"
        alert("Successfully Updated")


}


//INSERT

var insertInfo = [];
const Cow_ID = document.getElementById("c_id");
Cow_ID.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[0] = e.target.value;
    console.log(insertInfo);
})
const br = document.getElementById("br");
br.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[1] = e.target.value;
    console.log(insertInfo);
})
const C_type = document.getElementById("c_type");
C_type.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[2] = e.target.value;
    console.log(insertInfo);
})
const color = document.getElementById("color");
color.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[3] = e.target.value;
    console.log(insertInfo);
})
const gender = document.getElementById("gender");
gender.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[4] = e.target.value;
    console.log(insertInfo);
})
const weight = document.getElementById("weight");
weight.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[5] = e.target.value;
    console.log(insertInfo);
})
const fdIntk = document.getElementById("fdIntk");
fdIntk.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[6] = e.target.value;
    console.log(insertInfo);
})
const mp = document.getElementById("mp");
mp.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[7] = e.target.value;
    console.log(insertInfo);
})
const s_no = document.getElementById("s_no");
s_no.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[8] = e.target.value;
    console.log(insertInfo);
})
const status = document.getElementById("status");
status.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[9] = e.target.value;
    console.log(insertInfo);
})

const handleCattleInsert = () => {
    console.log("INSERT click")
    fetch('http://localhost:2800/insertcattle', {
        method: 'POST',
        body: JSON.stringify(insertInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        document.getElementById("cattleInsertModal").style.display = "none"
        alert("Successfully Inserted")

}

//DELETE
var deleteInfo = [];
const cId = document.getElementById("cId");
cId.addEventListener('blur', (e) => {
    console.log(e.target.value);
    deleteInfo[0] = e.target.value;
    console.log(deleteInfo);
})
const handleCattleDelete = () => {
    console.log("INSERT click")
    fetch('http://localhost:2800/deletecattle', {
        method: 'DELETE',
        body: JSON.stringify(deleteInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        document.getElementById("deleteCattleModal").style.display = "none"
        alert("Successfully Deleted")


}




// GOAT ALL MODAL SHOW
const goatUpdateFunc = () => {
    document.getElementById("goatUpdateModal").style.display = "block"
    console.log("updateclick")
}
const goatInsertFunc = () => {
    document.getElementById("goatInsertModal").style.display = "block"
}
const goatDeleteFunc = () => {
    document.getElementById("deleteGoatModal").style.display = "block"
}

//GOAT CLOSE ALL MODAL
const goatUpdateClose = () => {
    document.getElementById("goatUpdateModal").style.display = "none"
}
const goatInsertClose = () => {
    document.getElementById("goatInsertModal").style.display = "none"
}
const goatDeleteClose = () => {
    document.getElementById("deleteGoatModal").style.display = "none"
}
// UPDATE
var goatUpdateInfo = [];
// GET GOAT ID
const gID = document.getElementById("GID");
gID.addEventListener('blur', (e) => {
    console.log(e.target.value);
    goatUpdateInfo[0] = e.target.value;
})

// GET UPDATE FIELD NAME
const gFieldUpdate = document.getElementById("goatUpdate");
gFieldUpdate.addEventListener('change', (e) => {
    console.log('value', e.target.value);
    goatUpdateInfo[1] = e.target.value;
    console.log(goatUpdateInfo)
})

// GET UPDATE DATA
const fValue = document.getElementById("gFieldValue");
fValue.addEventListener('blur', (e) => {
    console.log(e.target.value);
    goatUpdateInfo[2] = e.target.value;
    console.log(goatUpdateInfo);
})
console.log(goatUpdateInfo)

// POST UPDATE DATA TO DATABASE
const handleGoatUpdate = () => {
    console.log("click")
    fetch('http://localhost:2800/updategoat', {
        method: 'POST',
        body: JSON.stringify(goatUpdateInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        document.getElementById("goatUpdateModal").style.display = "none"
        alert("Successfully Updated");


}

//INSERT

var insertInfo = [];
const G_ID = document.getElementById("g_id");
G_ID.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[0] = e.target.value;
    console.log(insertInfo);
})
const g_br = document.getElementById("g_br");
g_br.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[1] = e.target.value;
    console.log(insertInfo);
})
const g_type = document.getElementById("g_type");
g_type.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[2] = e.target.value;
    console.log(insertInfo);
})
const g_color = document.getElementById("g_color");
g_color.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[3] = e.target.value;
    console.log(insertInfo);
})
const g_gender = document.getElementById("g_gender");
g_gender.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[4] = e.target.value;
    console.log(insertInfo);
})
const g_weight = document.getElementById("g_weight");
g_weight.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[5] = e.target.value;
    console.log(insertInfo);
})
const g_fdIntk = document.getElementById("g_fdIntk");
g_fdIntk.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[6] = e.target.value;
    console.log(insertInfo);
})
const g_mp = document.getElementById("g_mp");
g_mp.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[7] = e.target.value;
    console.log(insertInfo);
})
const g_s_no = document.getElementById("g_s_no");
g_s_no.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[8] = e.target.value;
    console.log(insertInfo);
})
const g_status = document.getElementById("g_status");
g_status.addEventListener('blur', (e) => {
    console.log(e.target.value);
    insertInfo[9] = e.target.value;
    console.log(insertInfo);
})

const handleGoatInsert = () => {
    console.log("INSERT click")
    fetch('http://localhost:2800/insertgoat', {
        method: 'POST',
        body: JSON.stringify(insertInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        document.getElementById("goatInsertModal").style.display = "none"
        alert("Successfully Inserted")
}


var goatDeleteInfo = [];
const gId = document.getElementById("gId");
gId.addEventListener('blur', (e) => {
    console.log(e.target.value);
    goatDeleteInfo[0] = e.target.value;
    console.log(deleteInfo);
})
const handleGoatDelete = () => {
    console.log("INSERT click")
    fetch('http://localhost:2800/deletegoat', {
        method: 'DELETE',
        body: JSON.stringify(goatDeleteInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        document.getElementById("deleteGoatModal").style.display = "none";
        alert("Successfully deleted")

}