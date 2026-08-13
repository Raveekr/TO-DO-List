let button = document.querySelector("button");
let input = document.querySelector("input");
let tasklist = document.querySelector(".tasklist");

// Array created to save tasks
let saved = []

// To get saved data from localStorage
let stored = localStorage.getItem("tasks")
console.log(stored)

if (stored) {
    saved = JSON.parse(stored)
}

// Recreate li using saved data
saved.forEach(function (task) {
    let li = document.createElement("li")
    li.innerText = task[0]
    tasklist.append(li)
    
    // check if task is completed and add class to li
    if (task[1] === true) {
        li.classList.add("completed");
       
    }
    // recreating deletebtn for li to remove after page refreshes
    let deletebtn = document.createElement("button")
    deletebtn.classList.add("deletebtn")
    deletebtn.innerText = "Delete"
    li.append(deletebtn)
    
    // deletebtn onclick functionality
    deletebtn.onclick = function(){
        
        li.remove()
        saved =  saved.filter(function(savedtask){
            return savedtask !== task
        })
        localStorage.setItem("tasks", JSON.stringify(saved))
        
    }
    // strikethrough code for recreated li 
    li.onclick = function(){
        li.classList.toggle("completed")
        task[1] = !task[1]
        localStorage.setItem("tasks", JSON.stringify(saved))
        
    }
    
})

button.onclick = function () {
    let text = input.value
    if (text === "") {
        return
    }

    else {
        // tasks saved in (saved) array 
        saved.push([text, false])
        let task = saved[saved.length - 1]
        localStorage.setItem("tasks", JSON.stringify(saved))
        console.log(saved)



        // li created
        let li = document.createElement("li")
        li.innerText = input.value;
        tasklist.append(li)
        input.value = "";

        // Delete btn for li created
        let deletebtn = document.createElement("button")
        deletebtn.classList.add("deletebtn")
        deletebtn.innerText = "  Delete";
        li.append(deletebtn)
        deletebtn.onclick = function () {
            li.remove()
            saved = saved.filter(function(task) {
                return task[0] !== text
            })
            localStorage.setItem("tasks", JSON.stringify(saved))
            

        }
        
        // Strikethrough completed tasks code 
        li.onclick = function () {
            li.classList.toggle("completed")
          task[1] = !task[1]
          localStorage.setItem("tasks", JSON.stringify(saved))
           
            console.log(saved)
            console.log(task)

        }

    }
}
