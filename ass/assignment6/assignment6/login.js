window.onload = loginLoad;
function loginLoad(){
	var from = document.getElementById("myLogin");
    from.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	console.log(username);

	const password = urlParams.get('password')
	console.log(password);

	var loginusername = document.forms["myLogin"]["username"].value;
	console.log(loginusername); 
	var loginpassword = document.forms["myLogin"]["password"].value;
	console.log(loginpassword); 
	if(password != loginpassword){
		alert("รหัสไม่ถูกต้อง");
		return false
	}else if (username != loginusername){
		alert("ชื่อไม่ถูกต้อง");
		return false
	}
	alert("ชื่อ และ รหัสถูกต้อง")
	return false
}

			