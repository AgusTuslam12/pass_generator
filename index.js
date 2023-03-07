
let password = document.getElementById("password")
let hash = document.getElementById("hash")
let decrypt = document.getElementById("decrypt")
let hasilpass = document.getElementById("hasilpass")
let copyIcon = document.querySelector(".password-box .copy-icon")
let copyhash = document.querySelector(".hash-pass .copy-hash")

let passwordLength = 12;

function generatePassword(){
  const lowerAlpabet = "abcdeghijkmnpqrstuvwxyz"
  const upperAlpabet = "ABCDEGHJKLMNPQRSTUVWXYZ"
  const numeric = "23456789"
  const symbol = "*#@!"
  let passwordLength = 12;

    const data = lowerAlpabet + upperAlpabet + numeric + symbol
    let generator = '';

    for(let index = 0; index < passwordLength; index++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

function crypt(){
	const newPassword = generatePassword(passwordLength.value);
	document.getElementById('password').value = newPassword;
	var salt;
	if($("#salt").val().length != 0){
		salt = $("#salt").val();
	}else{
		try{
            salt = bcrypt.gensalt($("#rounds").val());
		}catch(err){
                	alert(err);
                	return;
		}
		$("#salt").val(salt);
	}
        try{
           	$("#progressbar").progressbar({ value: 0 });
		bcrypt.hashpw($("#password").val(), $("#salt").val(), result, function() {
                	var value = $('#progressbar').progressbar( "option", "value" );
                    	$('#progressbar').progressbar({ value: value + 1 });
                });
        }catch(err){
                alert(err);
                return;
        }
}

//copy passInput's value on copyIcon click
//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(password.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace iconeplace icon
  });

  copyhash.addEventListener("click", () => {
    navigator.clipboard.writeText(hash.value);
    copyhash.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
  });


  function reset(){
    document.getElementById('password').value ='';
    document.getElementById('hash').value = '';
    document.getElementById('salt').value = '';
}
