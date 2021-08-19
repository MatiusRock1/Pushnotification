$('#metallica').click(function(){
    console.log(token);
    var data = { token : token, topic : "Metallica" };
    $.ajax({
            url : 'https://firebase.matius-rock.com/registertokentopic',
            data : data, 
            method : 'post', //en este caso
            dataType : 'json',
            success : function(response){
                console.log(response);
            },
            error: function(error){
                   //codigo error
            }
    });
});
$('#anime').click(function(){
    console.log(token);
    var data = { token : token, topic : "anime" };
    $.ajax({
            url : 'https://firebase.matius-rock.com/registertokentopic',
            data : data, 
            method : 'post', //en este caso
            dataType : 'json',
            success : function(response){
                console.log(response);
            },
            error: function(error){
                   //codigo error
            }
    });
});
$('#manga').click(function(){
    console.log(token);
    var data = { token : token, topic : "manga" };
    $.ajax({
            url : 'https://firebase.matius-rock.com/registertokentopic',
            data : data, 
            method : 'post', //en este caso
            dataType : 'json',
            success : function(response){
                   console.log(response);
            },
            error: function(error){
                   //codigo error
            }
    });
});