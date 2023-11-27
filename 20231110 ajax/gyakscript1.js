document.getElementById("fetch-posts").onclick = function(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            let posts = JSON.parse(xhr.responseText);
            console.log(posts);
            let postList = "";
            for(const post of posts){
                /*postList += "<h1>" + post.title + "</h1><p>" + post.body + "</p>"*/

                postList += `<h1>${post.title}</h1> <p>${post.body}</p>`
            }
            document.getElementById("post-list-container").innerHTML = postList;
        }
    }

    xhr.open("GET", "http://jsonplaceholder.typicode.com/posts");

    xhr.send();
}