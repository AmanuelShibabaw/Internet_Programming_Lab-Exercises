$(".loadUsers").click(function(){
    fetchAndDisplayUsers();
})
function fetchAndDisplayUsers(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhr.onload = function(){
        if(xhr.status === 200){
            const users = JSON.parse(xhr.responseText)
            let html = `
            <table class="table table-dark table-hover">
            <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            </thead>
            <tbody>
            `;
            users.forEach(users =>{
                html +=`
                <tr>
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.username}</td>
                <td>${users.email}</td>
                </tr>
                `;
            });
            html +=`</tbody></table>`;
            $("#userList").html(html);
        }else{
            console.log("error fetching users status code:"+xhr.status)
        }
    }
    xhr.onerror = function(){
        console.log("SORRY THERE IS NO INTERNET CONNECTION!")
    }
    xhr.send()
}


$(".loadUsersusingfetch").click(function(){
    fetchAndDisplayUsersUsingFetch();
})
function fetchAndDisplayUsersUsingFetch(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("FETCHED SUCCESSFULLY!")
        return response.json()
    })
    .then(
        users=>{
            let html = `
            <table class="table table-bordered">
            <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            </thead>
            <tbody>
            `;
            users.forEach(users =>{
                html +=`
                <tr>
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.username}</td>
                <td>${users.email}</td>
                </tr>
                `;
            });
            html +=`</tbody></table>`;
            $("#userList").html(html);
        }
    ).catch(err=>{
        console.log("ERROR OCCURED!!")
    })
}

$(".loadUsersUsingFetchandAwait").click(function(){
    fetchAndDisplayUsersUsingAsyncAwait();
})
async function fetchAndDisplayUsersUsingAsyncAwait(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await response.json()
    let html = `
            <table class="table table-bordered border-primary">
            <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            </thead>
            <tbody>
            `;
            users.forEach(users =>{
                html +=`
                <tr>
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.username}</td>
                <td>${users.email}</td>
                </tr>
                `;
            });
            html +=`</tbody></table>`;
            $("#userList").html(html);
}

$(".loadusingJquery").click(function(){
    fetchAndDisplayUsersUsing_ajax_Jquery();
})
function fetchAndDisplayUsersUsing_ajax_Jquery(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        method:"GET",
        success:function(users){
            let html = `
            <table class="table table-green table-striped-columns mt-8">
            <thead  class="table-light">
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            </thead>
            <tbody>
            `;
            users.forEach(users =>{
                html +=`
                <tr>
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.username}</td>
                <td>${users.email}</td>
                </tr>
                `;
            });
            html +=`</tbody></table>`;
            $("#userList").html(html);
        },
        error:function(){
            console.log("Error while fetching data using ajax!!!!!")
        }
    })
}