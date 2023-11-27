let btn = document.getElementById("fetch-posts");
btn.onclick = () => {
    let url = "http://jsonplaceholder.typicode.com/posts";
    sendRequest(url, "GET", null, function(posts){
        let postList = "";
        for(const post of posts){
                /*postList += "<h1>" + post.title + "</h1><p>" + post.body + "</p>"*/

                postList += `<h1>${post.title}</h1> <p>${post.body}</p>`
            }
        document.getElementById("post-list-container").innerHTML = postList;
    });
} 

function sendRequest(url, method, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(JSON.parse(xhr.responseText));
        }
    };

    xhr.open(method, url);
    xhr.send();
}