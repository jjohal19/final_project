let item1 = document.getElementById('grocery')
let item2 = document.getElementById('gr')
let item3 = document.getElementById('grocery2')
let item4 = document.getElementById('gr2')
let item5 = document.getElementById('grocery3')
let item6 = document.getElementById('gr3')
let item7 = document.getElementById('grocery4')
let item8 = document.getElementById('gr4')
let listDiv = document.getElementById('listDiv')
item2.addEventListener('click', function () {
  item1.classList.remove('no')
  item3.classList.add('no')
  item5.classList.add('no') 
  item7.classList.add('no')      
  showdata(grocery)
  document.getElementById('listname').innerHTML = 'Grocery'
})
item4.addEventListener('click', function () {
  item1.classList.add('no')
  item3.classList.remove('no')
  item5.classList.add('no')
  item7.classList.add('no')          
  showdata(movie)
  document.getElementById('listname').innerHTML = 'Movies'
})
item6.addEventListener('click', function () {
  item1.classList.add('no')
  item3.classList.add('no')
  item5.classList.remove('no')
  item7.classList.add('no')          
  showdata(assignment)
  document.getElementById('listname').innerHTML = 'Assignments'
})
item8.addEventListener('click', function () {
  item1.classList.add('no')
  item3.classList.add('no')
  item5.classList.add('no')
  item7.classList.remove('no')           
  showdata(others)
  document.getElementById('listname').innerHTML = 'Others'
})
let grocery = []
let movie = []
let assignment = []
let others = []

if (localStorage.getItem('grocery') === null) {
  localStorage.setItem('grocery', JSON.stringify(grocery)) 
}
else {
  grocery = JSON.parse(localStorage.getItem('grocery'))  
}

if (localStorage.getItem('movie') === null) {
  localStorage.setItem('movie', JSON.stringify(movie)) 
}
else {
  movie = JSON.parse(localStorage.getItem("movie"))   
}

if (localStorage.getItem('assignment') === null) {
  localStorage.setItem('assignment', JSON.stringify(assignment)) 
}
else {
  assignment = JSON.parse(localStorage.getItem('assignment'))     
}

if (localStorage.getItem('others') === null) {
  localStorage.setItem('others', JSON.stringify(others))
}
else {
  others = JSON.parse(localStorage.getItem('others'))     
}

function addGrocery (){
  a = document.getElementById('inputGrocery').value
  if (a !== '') {
    var putitem = [a, session]
    grocery.push(putitem)  
    localStorage.setItem('grocery', JSON.stringify(grocery))
    showdata(grocery)
    document.getElementById('inputGrocery').value = ''
  }
}

function addMovie () { 
  a = document.getElementById('inputMovie').value
  if (a !== '') {
      var putitem = [a, session]
      movie.push(putitem)    
      localStorage.setItem('movie', JSON.stringify(movie))
      showdata(movie)
      document.getElementById('inputMovie').value = ''
    }
}
function addAssignment () { 
    a = document.getElementById('inputAssign').value
  if (a != '') {
  var putitem = [a, session]
      assignment.push(putitem)   
      localStorage.setItem('assignment', JSON.stringify(assignment))
      showdata(assignment)
      document.getElementById('inputAssign').value = ''
    }
}
function addOthers () { 
    a = document.getElementById('inputOthers').value
    if(a !== ''){
        var putitem = [a, session]
        others.push(putitem)   
        localStorage.setItem('others', JSON.stringify(others))
        showdata(others)
        document.getElementById('inputOthers').value = ''
    }
}

function updateit (e) {
    e.style.display='none'
    var button1 = document.createElement('button')
    var input1 = document.createElement('input')
    input1.type = 'text'
    input1.value = e.parentElement.getElementsByTagName('span')[0].innerText
    e.parentElement.appendChild(input1)
    e.parentElement.appendChild(button1)
    button1.innerHTML = 'Update'
    button1.setAttribute("class",'updatenow')
    var myatt2 = document.createAttribute('onclick')
    myatt2.value = 'updatenow(this)'
    button1.setAttributeNode(myatt2) 
}

function updatenow (e) {   
    let listn = document.getElementById('listname').innerText
    a = e.parentElement.getElementsByTagName('input')[0].value
    if(a !== ''){
        var putitem = [a, session]
        if(listn == 'Grocery'){
            for(var i=0; i<=grocery.length-1; i++){
                if(grocery[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && grocery[i][1] == session )
                {
                    grocery.splice(i, 1)
                    grocery.push(putitem)
                    localStorage.setItem('grocery', JSON.stringify(grocery))
                    showdata(grocery)
                }
            }
        }

        if(listn=='Movies') {
            for(var i=0; i<=movie.length-1; i++){
                if(movie[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && movie[i][1] == session )
                {
                    movie.splice(i, 1)  
                    movie.push(putitem)
                    localStorage.setItem('movie', JSON.stringify(movie));
                    showdata(movie)
                }
            }
        }

        if(listn=='Assignments') {
            for(var i=0; i<=assignment.length-1; i++){
                if(assignment[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && assignment[i][1] == session )
                {
                    assignment.splice(i, 1)
                    assignment.push(putitem)
                    localStorage.setItem('assignment', JSON.stringify(assignment))
                    showdata(assignment)
                }
            }
        }

        if(listn=='Others') {
            for(var i=0; i<=others.length-1; i++){
                if(others[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && others[i][1] == session )
                {
                    others.splice(i, 1)  
                    others.push(putitem)
                    localStorage.setItem('others', JSON.stringify(others))
                    showdata(others)
                }
            }
        }
    }
}

function deleteit (e) {   
    let listn = document.getElementById('listname').innerText;
    if(listn=='Grocery'){
        for(var i=0; i<=grocery.length-1; i++){
            if(grocery[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && grocery[i][1] == session )
            {
                grocery.splice(i, 1)  
                localStorage.setItem('grocery', JSON.stringify(grocery))
                showdata(grocery)
            }
        } 
    }

    if(listn=='Movies') {
        for(var i=0; i<=movie.length-1; i++){
            if(movie[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && movie[i][1] == session )
            {
                movie.splice(i, 1)  
                localStorage.setItem('movie', JSON.stringify(movie))
                showdata(movie)
            }
        }
    }

    if(listn == 'Assignments') {
        for(var i=0; i<=assignment.length-1; i++){
            if(assignment[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && assignment[i][1] == session )
            {
                assignment.splice(i, 1) 
                localStorage.setItem('assignment', JSON.stringify(assignment))
                showdata(assignment)
            }
        }
    }

    if(listn=='Others') {
        for(var i=0; i<=others.length-1; i++){
            if(others[i][0] == e.parentElement.getElementsByTagName('span')[0].innerText && others[i][1] == session )
            {
                others.splice(i, 1)  
                localStorage.setItem('others', JSON.stringify(others))
                showdata(others)
            }
        }
    }
}

function showdata(myArray) {

    document.getElementById('todoList').innerHTML = '' 
    for(var i=0; i<=myArray.length-1; i++){
        if(myArray[i][1] == session){
            let listItem=document.createElement('li')
            let textnode = document.createElement('span')
            textnode.innerText = myArray[i][0]
            listItem.appendChild(textnode)
            listItem.setAttribute('class','deleteli')
            document.getElementById('todoList').appendChild(listItem)
            var myatt = document.createAttribute('onclick')
            myatt.value = 'line(this)';
            listItem.setAttributeNode(myatt); 
            var button = document.createElement('button')
            listItem.appendChild(button)
            button.innerHTML = 'Update'
            button.setAttribute('class','updatebutton')
            var myatt1 = document.createAttribute('onclick')
            myatt1.value = 'updateit(this)';
            button.setAttributeNode(myatt1); 
            var button1 = document.createElement('button')
            listItem.appendChild(button1)
            button1.innerHTML = 'Delete'
            button1.setAttribute('class','deletebutton')
            var myatt2 = document.createAttribute('onclick')
            myatt2.value = 'deleteit(this)';
            button1.setAttributeNode(myatt2); 
        }
    } 
}

let user = []
let session = 0

if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(user)) 
}
else{
    user = JSON.parse(localStorage.getItem('user'))     
}

function signup() {
    var s_name = document.getElementById('s_name').value.trim()
    var s_email = document.getElementById('s_email').value.trim()
    var s_password = document.getElementById('s_password').value.trim()
    if (s_name == '') {
        document.getElementById('sign').innerHTML = 'Please enter name' 
    }
    else if (s_email == '') {
        document.getElementById('sign').innerHTML = 'Please enter email'
    }
    else if (s_password === '') {
      document.getElementById('sign').innerHTML = 'Please enter password'
    }
  else if (s_password.length < 7) {
      document.getElementById('sign').innerHTML = 'Password is too short'
    }
    else {
        if (usercreated(document.getElementById('s_email').value) === true) {
            document.getElementById('sign').innerHTML = 'This email is already exits'
        }
        else {
            user.push({ name: s_name, email: s_email, password: s_password })  
            localStorage.setItem('user', JSON.stringify(user))
          document.getElementById('sign').innerHTML = 'User created,Success'
          document.getElementById('s_name').value = ''
          document.getElementById('s_email').value = ''
          document.getElementById('s_password').value = ''
        }
    }
}

function displaySignUp () {
  document.getElementById('sign_up').style.display = 'block'
  document.getElementById('login').style.display = 'none'
}

function displayLogin(){
    document.getElementById('login').style.display = 'block'
    document.getElementById('sign_up').style.display = 'none'
}

function login () {
  var l_email = document.getElementById('l_email').value.trim()
  var l_password = document.getElementById('l_password').value.trim() 
  if (l_email == '') {
        document.getElementById('shownotilogin').innerHTML = 'Enter email'
    }
    else if (l_password === '') {
        document.getElementById('shownotilogin').innerHTML = 'Enter password'
    }
    else {
        var check = user.filter(function (check) {
            return check.email === l_email && check.password === l_password
        })[0]
        if (check) {                
          session = document.getElementById('l_email').value
          document.getElementById('l_email').value = ''
          document.getElementById('l_password').value = ''
          document.getElementById('todoList').innerHTML = ''
          showafterlogin()
        }
        else {
            document.getElementById('shownotilogin').innerHTML = 'Login Failed'
        }
    }
}

function logout () {
    session = 0
    showbeforelogin()           
}

function usercreated (email) {
    return user.some(function (el) {
        return el.email === email
    })
}

function showlogin () {
  document.getElementsByClassName('login')[0].style.display = 'block'
  document.getElementsByClassName('sign_up')[0].style.display = 'none'
}

function showsignup () {
  document.getElementsByClassName('login')[0].style.display = 'none'
  document.getElementsByClassName('sign_up')[0].style.display = 'block'
}

function showafterlogin () {
  document.getElementsByClassName('before-login')[0].style.display = 'none'
  document.getElementsByClassName('after-login')[0].style.display = 'block'
}

function showbeforelogin () {
  document.getElementsByClassName('before-login')[0].style.display = 'block'
  document.getElementsByClassName('after-login')[0].style.display = 'none'
}
