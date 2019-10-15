let event_field = document.querySelector("#event_field");
let calendar_dropdown = document.querySelector("#calendar_dropdown");
let accid_switch = document.querySelector("#accid_switch");
let addEvents_btn = document.querySelector("#addEvents_btn");
let submitEvents_btn = document.querySelector("#submitEvents_btn");
let schedule_dropdown = document.querySelector("#schedule_field");

let table_body = document.querySelector("#table_body");
let event_regex = new RegExp('[a-zA-Z]{3}');

let addEvent = (evento, schedule, accid) =>{
    let new_row = document.createElement("tr");
    let datetime = new Date();

    new_row.className="table_active"
    new_row.innerHTML = `<th scope='row'>${evento}</th>
    <td>${schedule}</td>
    <td>${accid}</td>
    `;

    table_body.appendChild(new_row);
    
}

let parseAccidSwitch = (value)=>{
    if(value){
        return "Tuvo accidente"
    }
    return "No tuvo accidente"
}


submitEvents_btn.addEventListener("click", ()=>{
    let event = event_field.value.split(",");
    let accid = parseAccidSwitch(accid_switch.checked);
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text;

    if(event_regex.test(event)){
        addEvent(event, schedule, accid);
    } else {
        alert("Formato del evento no valido");
    }
})

event_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode;
    let event_value = event_field.value;

    if(keyCode == 13){
        submitEvents_btn.click();
    }

    if(event_regex.test(event_value )){
        submitEvents_btn.disabled = false;
    } else {
        submitEvents_btn.disabled = true;
    }
})

event_field.addEventListener("click", ()=>{
    let event = event_field.value.split(",");
    let accid = parseAccidSwitch(accid_switch.checked);

    if(event_regex.test(event)){
        addEvent(event, accid);
    } else {
        alert("Formato del evento no valido");
    }
})