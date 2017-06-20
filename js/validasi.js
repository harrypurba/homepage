function validasi(){


        var namaValid    = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
        var emailValid   = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var nama         = document.getElementById("nama").value;
        var email        = document.getElementById("email").value;
        var pesan        = document.getElementById("pesan").value;

        var count = 0;

         
        if (nama == '') {
        	document.getElementById('p1').innerText = "This field is required";
          	count++;
        }else{
            document.getElementById('p1').innerText = "";
        }
         
         
        if (email == '') {
        	document.getElementById('p2').innerText = "Invalid email address";
            count++;
        }else{
                if (email !=''  && !email.match(emailValid)) {
                    document.getElementById('p2').innerText = "Invalid email address";
                    count++;
                }else{
                    document.getElementById('p2').innerText = "";
                }
        }
         

       
        
        if (pesan == '') {
        	document.getElementById('p3').innerText = "Pesan tidak boleh kosong";
            count++;
        }else{
            document.getElementById('p3').innerText = "";
        }

        if (count++>0) {
            return false;
        }
    return true
}