



function fetAndDisplay(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);

xhr.onload = function(){
    if(xhr.status == 200){
       const users = JSON.parse(xhr.responseText);
       let html = `<table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody class="tby">`;
            users.forEach(user=>{
                html+=`<tr class="trt">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>`;
            })
            html+=`
            <tbody>
            </table>`;
            // document.getElementById('users').innerHTML = html;
            $(".users").html(html);
            console.log("done")
    }else{
        console.log("Error occured",xhr.status)
    }
}
xhr.onerror = function(){
    console.log("Network error")
}

xhr.send();
}

$("#load").click(function(){
    fetAndDisplay();
})
$("tr").click(function(){
    console.log("dd")
    $(this).remove()
})
 $(".tdy tr").dblclick("td",function(){
        $(this).fadeOut(500,function(){
            $(this).remove();
        })
    })

    $("#numcheck").on("keyup",function(){
        const value = $(this).val();
        if (value === "") {
        $("#msg").text("");
    }
        if(isNaN(value)){
            $("#msg").text("only numbers!").css("color","red")
        }else{
            $('#msg').text("Valid").css("color","green")
        }
    })
  

    function fetchData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            return response.json()
        }).then(users=>{
            let html = `<table class="table table-striped table-bordered table-hover ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody class="tby">`;
            users.forEach(user=>{
                html+=`<tr class="trt">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>`;
            })
            html+=`
            <tbody>
            </table>`;
            // document.getElementById('users').innerHTML = html;
            console.log("first")
            $(".users").html(html);
        }).catch(err=>{
            console.log("Error fetching data",err)
        })
    }

    $("#load2").click(function(){
        fetchData();
    })

    async function fetchAwait(){
        try {
             let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        let html = `<table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody class="tby">`;
            users.forEach(user=>{
                html+=`<tr class="trt">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>`;
            })
            html+=`
            <tbody>
            </table>`;
            // document.getElementById('users').innerHTML = html;
            $(".users").html(html);
        } catch (error) {
            console.log("ERROR:",error)
        }
    }

    $('#load3').click(function(){
        fetchAwait();
    })


    function fetchUsingAjax(){
        const xhr = new XMLHttpRequest();
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            method:'GET',
            success:function(users){
                let html = `<table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody class="tby">`;
            users.forEach(user=>{
                html+=`<tr class="trt">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>`;
            })
            html+=`
            <tbody>
            </table>`;
            // document.getElementById('users').innerHTML = html;
            $(".users").html(html);
            },
            error:function(xhr,status,error){
                console.log("error occured :",error)
            }
        })
    }

    $('#load4').click(function(){
        fetchUsingAjax();
    })