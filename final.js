let inputEle= document.createElement("input");
inputEle.placeholder="username...";

let passEle= document.createElement("input");
passEle.placeholder="password...";
passEle.setAttribute("type","password");

let messageEle=document.createElement("h1");


let button1= document.createElement("button");
button1.innerHTML="Login...";
button1.addEventListener("click",function(){
    if (inputEle.value !== "cool") {
        messageEle.innerHTML = "Incorrect Username Please Try Again.........";
    }
    else if(passEle.value !== "password"){
        messageEle.innerHTML= "Incorrect password..."
    }
    else {
        const pages=[
            {
                page: "Grade View",
                navigate: gradeview,
            },
            {
                page: "Add Grade",
                navigate: addgrade,
            },

        ]
        inputEle.style.display="none";
        button1.style.display="none";
        passEle.style.display="none";
        messageEle.style.display="none";

        function navButton(pg, pr, nv) {
            let button = document.createElement("button");
            button.innerHTML = pg;
            button.addEventListener("click", function () {
                document.body.querySelector(".wrapper").innerHTML = ""
                nv();
            });
            pr.appendChild(button);
        }

        function navigation() {
            let nav = document.createElement("nav");
            let wrapper = document.createElement("div");
            wrapper.classList.add("wrapper")
            nav.style.height = "80px";
            nav.style.backgroundColor = "blue";
            for (obj of pages) {
                navButton(obj.page, nav, obj.navigate);

            }


            document.body.appendChild(nav);
            document.body.appendChild(wrapper);
        }

        function gradeview() {
            let home = document.createElement("h1");
            home.innerHTML = "Grades";
            document.body.querySelector(".wrapper").appendChild(home);
            document.body.appendChild(listEle);



        }
        function addgrade() {
            let view = document.createElement("h1");
            view.innerHTML = "Submit Grades";
            let inputEle2 = document.createElement("input");
            inputEle2.placeholder = "Student Name..."
            view.appendChild(inputEle2);
            let inputEle3 = document.createElement("input");
            inputEle3.placeholder = "Grade(0-100)...";
            view.appendChild(inputEle3);
            document.body.querySelector(".wrapper").appendChild(view);
            document.body.querySelector(".wrapper").appendChild(inputEle2);
            document.body.querySelector(".wrapper").appendChild(inputEle3);
            let button2 = document.createElement("button");
            button2.innerHTML = "Submit Grade";
            button2.addEventListener("click", function () {
                if (isNaN(inputEle3.value)) {
                    list.push("YOU MUST HAVE THIS FEATURE: STUDENT NAME, STUDENT GRADE");
                    renderList()
                }
                else{
                    list.push("Student Name: "+inputEle2.value + " | " + "Grade: "+inputEle3.value);
                    renderList();
                }
            })
            document.body.querySelector("div").appendChild(button2);
            //document.body.querySelector(".wrapper").appendChild(messageEle);
            document.body.querySelector(".wrapper").appendChild(listEle);



        }
        let list = [];
        let listEle = document.createElement("div");

        function renderList() {
            listEle.innerHTML = "";
            for (let i = 0; i < list.length; i++) {
                let ele = document.createElement("div");
                ele.innerHTML = list[i];
                listEle.appendChild(ele);
            }

        }


        navigation();
        gradeview();
        navButton();





    }

})

document.body.appendChild(inputEle);
document.body.appendChild(passEle);
document.body.appendChild(button1);
document.body.appendChild(messageEle);



//function addgrade() {
//    let about = document.createElement("h1");
//    let nameEle = document.createElement("h3");
//    about.innerHTML = "About Page";
//    nameEle.innerHTML = "Dante Lewis";
//    about.appendChild(nameEle);
//    document.body.querySelector(".wrapper").appendChild(about);