
window.onload = outputBookmark()
document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    e.preventDefault();

    const siteName = document.getElementById('name').value;
    const siteUrl = document.getElementById('url').value;

    const bookmark = {
        name : siteName,
        url : siteUrl
    }

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        console.log(bookmarks);
    }
    document.getElementById('myForm').reset();

    outputBookmark()
    
}

function deleteBookmark(a) {

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(url)

    for (var i = 0; i < bookmarks.length; i++) {
        console.log(bookmarks[i].url)
        if (bookmarks[i].url == a) {
            bookmarks.splice(i, 1)
            console.log(true)
        }
    }
    console.log(bookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    outputBookmark();

}
function outputBookmark() {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get output id
    var bookmarksResults = document.querySelector('ul');

    // Build output
    if(bookmarks !== null){
        bookmarksResults.innerHTML = '';
        for (var i = 0; i < bookmarks.length; i++) {
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;

            bookmarksResults.innerHTML += "<li class='bookmark'>"+
                "<a href='#' onclick='deleteBookmark(\"" + url +"\")' >"+
                    "<span class='dots'>+</span></a>"+
                "<a href='"+url+"'>"+
                    "<div class='letter' >"+name[0]+"</div>"+
                    "<span>"+name+"</span></a></li>"
        }
    }
    else{
        return
    }
}













// function outputBookmark(){
//     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     var ul = '';

//     if(bookmarks != null){
//     bookmarks.forEach((value) => {
//         var url = value.url
//         console.log(url)
//         ul += `
                // <li class='bookmark'>
                // <a href = '#' onclick = 'deleteBookmark(${url})' >
                //     <span class = "dots" data-delete="delete">+</span>
                // </a>
                // <a href='${value.url}'>
                //     <div class = 'letter' >${value.name[0]}</div>
                //     <span>${value.name}</span>
                // </a>
                // </li>
//                 `
//     } )
//     document.querySelector('ul').innerHTML = ul;
//     }
//     else{
//         console.log('empty')
//     }

// }
