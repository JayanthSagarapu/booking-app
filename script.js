const username = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const form = document.getElementById('form');
const list = document.getElementById('list');
const submitbtn = document.getElementById('submit');
const deletebtn = document.getElementById('del');

submitbtn.addEventListener('click',addItem) ;

deletebtn.addEventListener('click',deletelastItem);

const nameInput = username.value;
    const emailInput = email.value;
    const phoneInput = phone.value;

    const obj={
        name : nameInput,
        email : emailInput,
        phone : phoneInput,
    }

function addItem(e){
    e.preventDefault();

    const nameInput = username.value;
    const emailInput = email.value;
    const phoneInput= phone.value;

    const obj={
        name : nameInput,
        email : emailInput,
        phone : phoneInput,
    }

    
    axios
    .post("https://crudcrud.com/api/1a669d431e04425dbc161736b38091ba/bookingData",obj)
          .then((res) => {
            ShowOnScreen(res.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
}

    function ShowOnScreen(X) {
          //new li element
          const li = document.createElement("li");

          li.className =
            "list-group-item align-self-center w-75 mb-1 bg-secondary";

          li.append(
            document.createTextNode(X.name),
            "-",
            document.createTextNode(X.email),
            "-",
            document.createTextNode(X.phone)
          );

          //add delete button to listitems
          const delbtn = document.createElement("button");

          delbtn.className = "btn btn-sm float-right delete";

          delbtn.textContent = "Delete";

          delbtn.addEventListener("click", removelistitem);
          function removelistitem(e) {
            e.preventDefault()
            // localStorage.removeItem(obj.name);
            axios.delete(`https://crudcrud.com/api/1a669d431e04425dbc161736b38091ba/bookingData/${X._id}`)
              .then((response)=>{console.log('deleted'),response})
              .catch((err)=>{console.log(err)})
            
              list.removeChild(li);
          }

          li.appendChild(delbtn);

          list.appendChild(li);

          //add edit button to list items
          const editbtn = document.createElement("button");
          editbtn.className = "btn btn-sm float-right mr-2 edit";
          editbtn.textContent = "Edit";

          editbtn.addEventListener("click", edititem);
          function edititem(obj) {
            // localStorage.removeItem(obj.name);
            list.removeChild(li);
            username.value = X.name;
            phone.value = X.phone;
            email.value = X.email;

            axios.delete(`https://crudcrud.com/api/1a669d431e04425dbc161736b38091ba/bookingData/${X._id}`)
            .then((response)=>{console.log('deleted'),response})
            .catch((err)=>{console.log(err)})

            // axios.put(`https://crudcrud.com/api/1a669d431e04425dbc161736b38091ba/bookingData/${X._id}`,obj1)
            // .then((response)=>{
            //   console.log(response)
            // })
            // .catch((err)=>{console.log(err)})
          }

          li.append(editbtn);

          //reset(emptying) input fields
          form.reset();
    }

        
        // window.addEventListener('DOMContentLoaded',reloadpage);
        // function reloadpage(){
        //   const localStorageobj = localStorage;
        //   const localStoragekeys = Object.keys(localStorageobj);

        //   for(var i=0; i< localStoragekeys.length; i++){
        //     const key = localStoragekeys[i];
        //     const userDetailsStringValue = localStorageobj[key];
        //     const userDetailsValueObj = JSON.parse(userDetailsStringValue);
        //     ShowOnScreen(userDetailsValueObj);
        //   }
        // })

      window.addEventListener('DOMContentLoaded',reloadpage);
        function reloadpage(){
          axios
          .get("https://crudcrud.com/api/1a669d431e04425dbc161736b38091ba/bookingData")
          .then((response) => {
            for(var i=0; i< response.data.length;i++){
              ShowOnScreen(response.data[i])
            }
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });

        }

function deletelastItem(e){
    e.preventDefault();

    const last = list.lastChild;
    list.removeChild(last);
    
}





