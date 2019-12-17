function search() {
    var title = document.getElementById("search_params").value;
    var xhttp = new XMLHttpRequest();
    var url = 'http://www.omdbapi.com/?t='+title+'&apikey=50bd083';

    xhttp.onload = function() {
        var data = JSON.parse(this.response);
        document.getElementById("poster").innerHTML = 
            "<h1>"+data.Title+" ("+data.Year+")</h1>"+
            "<img src = "+data.Poster+">"+
            "<br>"+
            "______________________________________________"+
            "<h6>"+data.Genre+"  |  "+data.Released+"</h6>";
        // var rating = Math.round(data.imdbRating);  (add to line 26 -> '+&frasl;10')
        var rating = data.imdbRating*10;
            
        document.getElementById("info").innerHTML = 
            "<br><br><br><br><br><br><br><br><br>"+
            "<h4>IMDB Score: "+rating+"%</h4>"+
            "<blockquote>"+data.Plot+"</blockquote>"+                    
            "<h6><strong>Director:</strong> "+data.Director+"</h6>"+
            "<h6><strong>Writers:</strong> "+data.Writer+"</h6>"+
            "<h6><strong>Stars:</strong> "+data.Actors+"</h6>";
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    
}



