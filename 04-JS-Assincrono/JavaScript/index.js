var minhaPromisse = function() {
    return new Promise(function(resolve, reject) {
        var xrm = new XMLHttpRequest();
        xrm.open('GET', 'https://api.github.com/users/diego3g');
        xrm.send(null);

        xrm.onreadystatechange = function() {
            if(xrm.readyState === 4) {
                if(xrm.status === 200) {
                    resolve.apply(JSON.parse(xrm.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }

        }
    });
}

minhaPromisse()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })