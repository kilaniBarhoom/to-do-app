window.addEventListener('load',()=>{


    // <!-- Defining Variables --!>

          let firstform = document.getElementById('taskForm');
          let inp = document.querySelector('#taskinput')
          let tasks = document.getElementById('tasks')
          let ArchTasks = document.getElementById('Arch-tasks')
          let taskCounter = 1
          let taskCounter2 = 0
          let archiveCounter = 0
          let taskdate = ""

          let TaskArray = []
        //   let ArchivedTaskArray = []
        
           
    // <!--// Defining Variables //--!>



    // <!-- Taking The Date From The User --!>
          document.getElementById("date").addEventListener("change", function() {
              let input = this.value;
              taskdate = input 
          });

    // <!--// Taking The Date From The User //--!>



        firstform.addEventListener('submit',(s)=>{
              s.preventDefault();



        // <!-- Taking The Task input From The User --!>

              let taskvalue = inp.value

        // <!--// Taking The Task input From The User //--!>


    

        //<!-- Checking Validation Of Task Value And Date --!>
              if(taskvalue==null || taskvalue=="")
              {
                Swal.fire({
                    icon: 'error',
                    title: 'لم تدخل اي مهمة !!',
                  })
                  return
              }

          else if(taskdate==null)
              {
                Swal.fire({
                    icon: 'error',
                    title: 'أدخل تاريخ المهمة',
                  })
                  return
              }

         else if(Date.parse(taskdate)-Date.parse(new Date())<0)
         {
            Swal.fire({
                icon: 'info',
                title: 'أدخل التاريخ الصحيح',
              })
            return
         }

        //<!--// Checking Validation Of Task Value And Date //--!>
//////////////////////////////////////////////////////////////////////////////////////////

    

        
        // <!-- Creating The Task Div --!>

              let taskele = document.createElement('div')
              taskele.classList.add("task")

        // <!--// Creating The Task Div //--!>

        
        
        
        // <!-- Creating The Task Header Div --!>
        
              let taskheader = document.createElement('div')
              taskheader.classList.add('task-header')
              let tnum = document.createElement('span')
              tnum.classList.add('tasknumber')
              tnum.innerText += taskCounter++
              taskheader.appendChild(tnum)
              let tdate = document.createElement('span')
              tdate.innerHTML = taskdate
              tdate.innerHTML +=
                  `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  `
               taskheader.appendChild(tdate)

        // <!--// Creating The Task Header Div //--!>


        // <!-- Creating The Task Content Div --!>

              let taskContent = document.createElement('div')
              taskContent.classList.add('content')
              let textarea = document.createElement('textarea')
              textarea.classList.add('text')
              textarea.type = 'text'
             (( textarea.value = taskvalue  ))///////////////
              textarea.setAttribute('readonly','readonly')
              textarea.setAttribute('rows','3.5')
              textarea.setAttribute('cols','34.5')
              taskContent.appendChild(textarea)

        // <!--// Creating The Task Content Div //--!>



        // <!-- Creating The Task Buttons Div --!>
        
              let taskbuttons = document.createElement('div')
              taskbuttons.classList.add('buttons')
              let deletebtn = document.createElement('button')
              deletebtn.classList.add('delete')
              deletebtn.classList.add('black-toolip')
              deletebtn.setAttribute('data-toggle',"tooltip")
              deletebtn.setAttribute('title',"حذف")
              deletebtn.setAttribute('data-placement',"top")
              deletebtn.innerHTML=
              `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
              `
                
              taskbuttons.appendChild(deletebtn)


              let editbtn = document.createElement('button')
              editbtn.classList.add('edit')
              editbtn.classList.add('black-toolip')
              editbtn.setAttribute('data-toggle',"tooltip")
              editbtn.setAttribute('title',"تعديل")
              editbtn.setAttribute('data-placement',"top")
              editbtn.innerHTML=
              `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                  </svg>
              `

              taskbuttons.appendChild(editbtn)

        
              let archivebtn = document.createElement('button')
              archivebtn.classList.add('archive')
              archivebtn.classList.add('black-toolip')
              archivebtn.setAttribute('data-toggle',"tooltip")
              archivebtn.setAttribute('title',"أرشفة")
              archivebtn.setAttribute('data-placement',"top")
              archivebtn.innerHTML=
              `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                  </svg>
              `

              taskbuttons.appendChild(archivebtn)
        
        // <!--// Creating The Task Buttons Div //--!>




        // <!-- Appending To The Task Element --!>
        
              taskele.appendChild(taskheader)
              taskele.appendChild(taskContent)
              taskele.appendChild(taskbuttons)
        
              tasks.appendChild(taskele)
              document.getElementById('noftasks').innerHTML = ++taskCounter2

              addTask(tnum.innerText , taskvalue)

              function addTask(tnumber, taskvalue) {
                const newTask = {
                  number:tnumber,
                  tasktext: taskvalue
                };

                TaskArray.push(newTask);
                saveTasksToLocalStorage(TaskArray);

              }

        // <!-- function to save and retrieve tasks array to local storage --!>
              
              function saveTasksToLocalStorage(TaskArray) {
                  localStorage.setItem('TaskArray', JSON.stringify(TaskArray));
                }
                
                
                function getTasksFromLocalStorage() {
                    const tasksString = localStorage.getItem('TaskArray');
                    TaskArray = JSON.parse(tasksString) || [];
                }
                
                getTasksFromLocalStorage()
                console.log(TaskArray);
                
        // <!-- function to save and retrieve tasks array to local storage --!>
        
        // <!-- Appending To The Task Element --!>




        //<!-- Reseting The form inputs --!>

              firstform.reset()
        
        //<!-- Reseting The form inputs --!>





              editbtn.addEventListener('click',function(){
                  if(editbtn.innerText == 'حفظ')
                      {
                        if(textarea.value == null || textarea.value == "")
                        {
                            Swal.fire({
                                 icon: 'error',
                                 title: 'لم تدخل اي مهمة !!',
                            })
                            return
                        }
                          editbtn.innerHTML = 
                          `
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                      </svg>
              
                          `
                          deletebtn.style.transform = 'scale(1)'
                          archivebtn.style.transform = 'scale(1)'
                          textarea.setAttribute('readonly','readonly')
                          taskbuttons.style.gap = '15px'

        //<!-- Updating the new task text to the task array of task objects --!>

                          updateTaskNameByTnum(tnum.innerText,textarea.value)
                          function updateTaskNameByTnum(tnumber, newTaskValue) {

                            const taskToUpdate = TaskArray.find(task => task.number === tnumber);
                           
                            if (taskToUpdate) {
                              taskToUpdate.tasktext = newTaskValue;
                            }
                          }

        //<!-- Updating the new task text to the task array of task objects --!>


                      }
              else
                  {
                
                  textarea.removeAttribute('readonly')
                  textarea.focus()
                  taskbuttons.style.gap = '5px'
             
                  deletebtn.style.transform = 'scale(0)'
                  archivebtn.style.transform = 'scale(0)'
                  editbtn.innerHTML = 'حفظ'
                  editbtn.style.width = '80px'
                  editbtn.style.fontFamily = 'Noto Sans Arabic, sans serif'

              }
              })

              deletebtn.addEventListener('click',()=>{

                

                const swalWithBootstrapButtons = Swal.mixin({
                    
                    customClass: {
                      confirmButton: 'btn btn-success',
                      cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                  })
                  
                  swalWithBootstrapButtons.fire({
                    title: 'هل انت متاكد من حذف :   '+ textarea.value,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'حذف !   ',
                    
                    cancelButtonText: 'الغاء !',
                    reverseButtons: true
                    
                  }).then((result) => {
                    if (result.isConfirmed) {   
                            removeTaskByNum(tnum.innerText)
                            tasks.removeChild(taskele)
                            document.getElementById('noftasks').innerHTML = --taskCounter2
                            function removeTaskByNum(number) {
                              TaskArray = TaskArray.filter(task => task.number !== number);                        
                          }
                        


                    } 
                  })






                  
              })

        // <!--// Appending To The Task Element //--!>





        //  <!-- Add A Selected Task To archive --!>



              archivebtn.addEventListener('click',()=>{
                
                ArchTasks.appendChild(taskele)
                document.getElementById('nofarctasks').innerHTML = ++archiveCounter
                document.getElementById('noftasks').innerHTML = --taskCounter2
                tasks.removeChild(taskele)
               
              })

        
              

        //  <!--// Add A Selected Task To archive //--!>
        
    })


let navele1 = document.getElementById('navele1')
let navele2 = document.getElementById('navele2')

navele1.addEventListener('click',function(e){

    e.preventDefault();

    tasks.style.display = 'grid'
    ArchTasks.style.display = 'none'
    document.getElementById('nofarctasks').style.display = 'none'
    document.getElementById('nofarctasks').style.display = 'none'
    document.getElementById('noftasks').style.display = 'inline'
    document.getElementById('noftasks').style.display = 'inline'
    navele1.style.paddingLeft = '15px'
    navele2.style.paddingLeft = '0px'
    navele1.style.borderBottom = '2px solid #fff'
    navele2.style.borderBottom = '2px solid #f7f7f700'


})


navele2.addEventListener('click',function(e){

    e.preventDefault();
    tasks.style.display = 'none'
    ArchTasks.style.display = 'grid'
    document.getElementById('noftasks').style.display = 'none'
    document.getElementById('noftasks').style.display  = 'none'
    document.getElementById('nofarctasks').style.display = 'inline'
    document.getElementById('nofarctasks').style.display = 'inline'
    navele2.style.paddingLeft = '15px'
    navele1.style.borderBottom = '2px solid #f7f7f700'
    navele2.style.borderBottom = '2px solid #fff'

})




})
