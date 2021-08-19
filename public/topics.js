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
$('#anime').click(function(){
    var data = { token : token, topic : "anime" };
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
$('#manga').click(function(){
    var data = { token : token, topic : "manga" };
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