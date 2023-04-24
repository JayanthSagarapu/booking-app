const username = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const form = document.getElementById('form');
const list = document.getElementById('list');
const submitbtn = document.getElementById('submit');
const deletebtn = document.getElementById('del');

submitbtn.addEventListener('click',addItem) ;

deletebtn.addEventListener('click',deletelastItem);



function addItem(e){
    e.preventDefault()
    const nameInput = username.value;
    const emailInput = email.value;
    const phoneInput = phone.value;

    const obj={
        name : nameInput,
        email : emailInput,
        phone : phoneInput,
    }
    
    axios
    .post("https://crudcrud.com/api/f24b832404dc46cf82fa8556947575d4/bookingData",obj)
          .then((res) => {
            ShowOnScreen(res.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

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
          function removelistitem() {
            // localStorage.removeItem(obj.name);
            list.removeChild(li);
          }

          li.appendChild(delbtn);

          list.appendChild(li);

          //add edit button to list items
          const editbtn = document.createElement("button");
          editbtn.className = "btn btn-sm float-right mr-2 edit";
          editbtn.textContent = "Edit";

          editbtn.addEventListener("click", edititem);
          function edititem() {
            // localStorage.removeItem(obj.name);
            list.removeChild(li);
            username.value = obj.name;
            phone.value = obj.phone;
            email.value = obj.email;
          }

          li.append(editbtn);

          //reset(emptying) input fields
          form.reset();
        }

    
      }

function deletelastItem(e){
    e.preventDefault();

    const last = list.lastChild;
    list.removeChild(last);
    
}





