window.onload = pageLoad;
function pageLoad(){
	var from = document.getElementById("myRegister");
    from.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

        var firstname = document.forms["myRegister"]["firstname"].value;
        var lastname = document.forms["myRegister"]["lastname"].value;
        var gender = document.forms["myRegister"]["gender"].value;
        var bday = document.forms["myRegister"]["bday"].value;
        var email = document.forms["myRegister"]["email"].value;
        var username = document.forms["myRegister"]["username"].value;
        var password = document.forms["myRegister"]["password"][0].value;
        console.log(password); 

        var RetypePassword = document.forms["myRegister"]["password"][1].value;
        console.log(RetypePassword);
        console.log(password ==  RetypePassword);
         
        if(password !=  RetypePassword){
            document.getElementById("errormsg").innerHTML = "รหัสไม่ถูกต้อง";
            return false
        } else if (lastname.trim() ===""|| bday.trim() ===""|| email.trim() ===""||username.trim() ===""){
            document.getElementById("errormsg").innerHTML = "คุณยังกรอกข้อมูลไม่ครบ";
            return false
        }

}