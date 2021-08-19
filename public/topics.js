$('#metallica').click(function(){
    var data = { token : token, topic : "Metallica" };
    $.ajax({
            url : 'https://firebase.matius-rock.com/registertokentopic',
            data : data, 
            method : 'post', //en este caso
            dataType : 'json',
            success : function(response){
                   //codigo de exito
            },
            error: function(error){
                   //codigo error
            }
    });
});