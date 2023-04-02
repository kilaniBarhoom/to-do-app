   
    
    
    
    let firstform = document.getElementById('taskForm');
    let inp = document.querySelector('#taskinput')
    let tasks = document.getElementById('tasks')
    let HiddenTasks = document.getElementById('Arch-tasks')
    let noftasks = document.getElementById('noftasks')
    let nofarctasks = document.getElementById('nofarctasks')
    let taskCounter = 0
    let HiddenCounter = 0
    let taskdate = ""
    tasks.style.display = 'grid'

 let TaskArray = []  
 let HiddenTaskArray = []  



 function getTasksFromLocalStorage()
 {
    let tasksInLocal = JSON.parse(localStorage.getItem("tasks"))
    let hiddenInLocal = JSON.parse(localStorage.getItem("hiddenTasks"))
    TaskArray = tasksInLocal ?? []
    HiddenTaskArray = hiddenInLocal ?? []
 }

 
 getTasksFromLocalStorage();
 noftasks.innerHTML = TaskArray.length
 nofarctasks.innerHTML = HiddenTaskArray.length
 taskCounter = TaskArray.length
 HiddenCounter = HiddenTaskArray.length


function reFillTask()
{
  let iteration = 0
  tasks.innerHTML = ""
  
   for(task of TaskArray)
   {
      let TheAcualTask =
      `
      <div class="task"  >
      <div class="task-header ${ TaskArray[iteration].checked?"task-header-checked":""}">
          <span class="tasknumber">${task.number}</span>
          <span class="taskdate"> 
  
          ${task.date}
               
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              </svg>
          </span>
      </div>
      <div class="content">
          <textarea   class="text ${ TaskArray[iteration].checked?"txtareackeck":""} " readonly cols="34.5" rows="3.5" class="text"> ${task.text} </textarea>
      </div>
      <div class="buttons">

            <div onclick="checkTaskArray( ${iteration} )" class="checkbox ${ TaskArray[iteration].checked?"styledCheckbox":""} black-toolip" data-toggle="toolip"   title="إتمام" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
          </div>

          <div class= "three-btns">
          <button onclick="deleteSelectedTask( ${iteration} )" class="delete ${ TaskArray[iteration].checked?"deletecheck":""} black-toolip" data-toggle="toolip"  title="حذف" data-placement="top">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg>
          </button>
  
          <button onclick="editSelectedTask( ${iteration} ) " class="edit ${ TaskArray[iteration].checked?"editcheck":""} black-toolip" data-toggle="toolip"  title="تعديل" data-placement="top" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
              </svg>
          </button>
  
          <button onclick="hideSelectedTask( ${iteration} ) " class="hide ${ TaskArray[iteration].checked?"hidecheck":""} black-toolip" data-toggle="toolip"  title="إخفاء" data-placement="top">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
            </svg>
          </button>

         </div>
      </div>
  </div>
      
      `
    
    tasks.innerHTML += TheAcualTask;
    iteration++;  
   }
   


}


function reFillHiddenTask()
{
  let iteration = 0
  HiddenTasks.innerHTML = ""
  
   for(task of HiddenTaskArray)
   {
      let TheHiddenTask =
      `
      <div class="task">
      <div class="task-header  ${ HiddenTaskArray[iteration].checked?"task-header-checked":""}">
          <span class="tasknumber">${task.number}</span>
          <span class="taskdate"> 
  
          ${task.date}
                
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              </svg>
          </span>
      </div>
      <div class="content">
          <textarea  class="text ${ HiddenTaskArray[iteration].checked?"txtareackeck":""}" readonly cols="34.5" rows="3.5" class="text"> ${task.text} </textarea>
      </div>
      <div class="buttons">
          <div onclick="checkHiddenTaskArray( ${iteration} )" class="checkbox ${ HiddenTaskArray[iteration].checked?"styledCheckbox":""} black-toolip" data-toggle="toolip"   title="إتمام" data-placement="top">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
          </div>
          <div class= "three-btns">
          <button onclick="deleteSelectedTask( ${iteration} )" class="delete ${ HiddenTaskArray[iteration].checked?"deletecheck":""} black-toolip" data-toggle="toolip"  title="حذف" data-placement="top">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg>
          </button>
  
          <button onclick="editSelectedTask( ${iteration} ) " class="edit ${ HiddenTaskArray[iteration].checked?"editcheck":""} black-toolip" data-toggle="toolip"  title="تعديل" data-placement="top" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
              </svg>
          </button>
  
          <button onclick="unhideSelectedTask( ${iteration} ) " class="hide ${ HiddenTaskArray[iteration].checked?"hidecheck":""} black-toolip" data-toggle="toolip"  title="إظهار" data-placement="top">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
          </button>

         </div>
      </div>
  </div>
      
      `
    
    HiddenTasks.innerHTML += TheHiddenTask;
    iteration++;  
    
   }
   

}


reFillTask();
reFillHiddenTask()



   document.getElementById("date").addEventListener("change", function() {
    taskdate = this.value;
});



firstform.addEventListener('submit',(s)=>{
   s.preventDefault();
   if(TaskArray.length)
   {
     sortBtn.style.display = 'inline'
   }

   let taskvalue = inp.value



//<!-- Checking Validation Of Task Value And Date --!>
   if(taskvalue==null || taskvalue=="")
   {
     Swal.fire({
         icon: 'error',
         title: 'لم تدخل اي مهمة !!',
       })
       return
   }
   if(taskdate==null || taskdate == "")
    taskdate = "! Untill Completed"
if(taskdate!=null || taskdate != "")
 if(Date.parse(taskdate)-Date.parse(new Date())<0)
{
 Swal.fire({
     icon: 'info',
     title: 'أدخل التاريخ الصحيح',
   })
 return
}

//<!--// Checking Validation Of Task Value And Date //--!>

submitForm(taskvalue,taskdate);

tasks.style.display = 'grid'
HiddenTasks.style.display = 'none'
document.getElementById('nofarctasks').style.display = 'none'
document.getElementById('nofarctasks').style.display = 'none'
document.getElementById('noftasks').style.display = 'inline'
document.getElementById('noftasks').style.display = 'inline'
navele1.style.paddingLeft = '15px'
navele2.style.paddingLeft = '0px'
navele1.style.borderBottom = '2px solid #fff'
navele2.style.borderBottom = '2px solid #f7f7f700'

firstform.reset()
noftasks.innerHTML=TaskArray.length
nofarctasks.innerHTML = HiddenTaskArray.length



})


function submitForm(taskvalue,taskdate)
{

    TaskArray.push({
      "number":++taskCounter,
      "date":taskdate,
      "text":taskvalue,
      "checked":false,
      "dateCreated":new Date()
});
reFillTask()
  storeToLocalStorage()
}


function deleteSelectedTask(it)
{
  const swalWithBootstrapButtons = Swal.mixin({
                    
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
 
  swalWithBootstrapButtons.fire({
    title: 'هل انت متاكد من حذف :   '+ ((tasks.style.display == 'grid')? TaskArray[it].text :HiddenTaskArray[it].text),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'حذف !   ',
    
    cancelButtonText: 'الغاء !',
    reverseButtons: true
    
  }).then((result) => {
    if (result.isConfirmed) {   
           if(tasks.style.display == 'grid')
           {
             TaskArray.splice(it,1)
              for(let i=it ; i < TaskArray.length ; i++)
                  TaskArray[i].number--;
          
             taskCounter = TaskArray.length

             reFillTask()
             noftasks.innerHTML = TaskArray.length
             storeToLocalStorage();
             return
           }

           else if(HiddenTasks.style.display == 'grid'){
       
             for(let i=it ; i < HiddenTaskArray.length ; i++)
                 (HiddenTaskArray[i].number)--;
          
             if(HiddenCounter-1 > 0)
                HiddenCounter--

             else HiddenCounter = 0
            


             HiddenTaskArray.splice(it,1)
             reFillHiddenTask()
             nofarctasks.innerHTML = HiddenTaskArray.length
             storeToLocalStorage();
             if(HiddenTaskArray.length == 0){
             tasks.style.display = 'grid'
    HiddenTasks.style.display = 'none'
    document.getElementById('nofarctasks').style.display = 'none'
    document.getElementById('nofarctasks').style.display = 'none'
    document.getElementById('noftasks').style.display = 'inline'
    document.getElementById('noftasks').style.display = 'inline'
    navele1.style.paddingLeft = '15px'
    navele2.style.paddingLeft = '0px'
    navele1.style.borderBottom = '2px solid #fff'
    navele2.style.borderBottom = '2px solid #f7f7f700'
             }
          }

    } 
  })

  
}

function editSelectedTask(it)
{
  let textarea = document.querySelectorAll('.text')[it]
  if(document.querySelectorAll('.edit')[it].innerText == 'حفظ')
  {
    if(textarea.value == null || textarea.value == "")
    {
        Swal.fire({
             icon: 'error',
             title: 'لم تدخل اي مهمة !!',
        })
        textarea.focus()
        return
    }
    else{
    document.querySelectorAll('.edit')[it].innerHTML = 
      `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
  </svg>

      `;

      document.querySelectorAll('.delete')[it].style.transform = 'scale(1)'
      document.querySelectorAll('.hide')[it].style.transform = 'scale(1)'
      document.querySelectorAll('.checkbox')[it].style.transform = 'scale(1)'
      textarea.setAttribute('readonly','readonly')
      document.querySelectorAll('.buttons')[it].style.gap = '12px'

      if(tasks.style.display == 'grid')
      {
      TaskArray[it].text = textarea.value

      reFillTask()
      }
  else{
    HiddenTaskArray[it].text = textarea.value
    reFillHiddenTask()
  }
}
  }
else{

textarea.removeAttribute('readonly')
textarea.focus()
textarea.select()
document.querySelectorAll('.edit')[it].style.gap = '5px'

document.querySelectorAll('.delete')[it].style.transform = 'scale(0)'
document.querySelectorAll('.hide')[it].style.transform = 'scale(0)'
document.querySelectorAll('.checkbox')[it].style.transform = 'scale(0)'

document.querySelectorAll('.edit')[it].innerHTML = 'حفظ'
document.querySelectorAll('.edit')[it].style.width = '60px'
document.querySelectorAll('.edit')[it].style.fontWeight = '800'
document.querySelectorAll('.edit')[it].style.fontFamily = 'Noto Sans Arabic, sans serif'

}

storeToLocalStorage()
}




let navele1 = document.getElementById('navele1')
let navele2 = document.getElementById('navele2')

navele1.addEventListener('click',function(e){

    e.preventDefault();
    reFillTask()
    tasks.style.display = 'grid'
    HiddenTasks.style.display = 'none'
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
  if(HiddenTaskArray.length == 0 )
    {
      document.querySelector('.hide-pass').style.display = 'none'
      document.querySelector('.overlay').style.display = 'none'
      document.getElementById('pass-hide-form').reset()
      Swal.fire({
        icon: 'error',
        title: 'لا يوجد مهمات مخفية',
      })
      return
    }
  if(HiddenTasks.style.display == 'grid')
  {
    return;
  }
  document.querySelector('.hide-pass').style.display = 'flex'
  document.querySelector('.overlay').style.display = 'block'
  document.getElementById('hidden-pass-input').focus()
  document.getElementById('pass-hide-form').reset()
  document.getElementById('pass-hide-form').addEventListener('submit',(e)=>{

    e.preventDefault();
    let passVal = document.getElementById('hidden-pass-input')
    

    if(passVal.value == '123')
    {

      
        reFillHiddenTask()
      document.querySelector('.hide-pass').style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'
    tasks.style.display = 'none'
    HiddenTasks.style.display = 'grid'
    document.getElementById('noftasks').style.display = 'none'
    document.getElementById('noftasks').style.display  = 'none'
    document.getElementById('nofarctasks').style.display = 'inline'
    document.getElementById('nofarctasks').style.display = 'inline'
    navele2.style.paddingLeft = '15px'
    navele1.style.borderBottom = '2px solid #f7f7f700'
    navele2.style.borderBottom = '2px solid #fff'
      
  }
  
  
  else {
    Swal.fire({
      icon: 'error',
      title: ' كلمة السر غير صحيحة !!',
    })
    document.getElementById('pass-hide-form').reset()
    document.getElementById('pass-hide-form').focus()
  }

  
  })



})




function hideSelectedTask(it)
{

  document.querySelector('.hide-pass2').style.display = 'flex'
  document.querySelector('.overlay').style.display = 'block'
  document.getElementById('hidden-pass-input2').focus()
  document.getElementById('pass-hide-form2').reset()
  document.getElementById('pass-hide-form2').addEventListener('submit',(e)=>{

    e.preventDefault();
    let passVal = document.getElementById('hidden-pass-input2')
    
    if(passVal.value == '123')
    {
      
      document.querySelector('.hide-pass2').style.display = 'none'
      document.querySelector('.overlay').style.display = 'none'
      const swalWithBootstrapButtons = Swal.mixin({
                    
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '  هل انت متاكد من إخفاء مهمة :   ' + TaskArray[it].text ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'إخفاء !   ',
        
        cancelButtonText: 'الغاء !',
        reverseButtons: true
        
      }).then((result) => {
        if (result.isConfirmed) {   
      
      HiddenCounter++;
      
      TaskArray[it].number = HiddenCounter;
      HiddenTaskArray.push(TaskArray[it]);
      TaskArray.splice(it,1)
        
      reFillHiddenTask();
      
      nofarctasks.innerHTML = HiddenTaskArray.length;
      for(let i=it ; i < TaskArray.length ; i++)
                        TaskArray[i].number--;
                
                   if(taskCounter-1 > 0)
                      taskCounter--
      
                      else taskCounter = 0
                      
                      reFillTask()
                      noftasks.innerHTML = TaskArray.length
                      storeToLocalStorage()
                    }
                  })

                  
                }
                
                
    else if(passVal==null || passVal==""){
      Swal.fire({
        icon: 'error',
        title: 'لم تدخل كلمة السر  !!',
      })
    }

    else{
      Swal.fire({
        icon: 'error',
        title: ' كلمة السر غير صحيحة !!',
      })
      document.getElementById('hidden-pass-input2').focus()
    }

    
    
  })
  
}

function unhideSelectedTask(it)
{

  const swalWithBootstrapButtons = Swal.mixin({
                    
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '  هل انت متاكد من إظهار مهمة :   ' + HiddenTaskArray[it].text ,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'إظهار !   ',
    
    cancelButtonText: 'الغاء !',
    reverseButtons: true
    
  }).then((result) => {
    if (result.isConfirmed) {   
  
  taskCounter++;
  
  HiddenTaskArray[it].number = taskCounter;
  TaskArray.push(HiddenTaskArray[it]);
  HiddenTaskArray.splice(it,1)
    
  reFillTask();
  
  noftasks.innerHTML = TaskArray.length;
  
  for(let i=it ; i < HiddenTaskArray.length ; i++)
                    HiddenTaskArray[i].number--;
            
               if(HiddenCounter-1 > 0)
                  HiddenCounter--
  
               else HiddenCounter = 0
  
    reFillHiddenTask()
    nofarctasks.innerHTML = HiddenTaskArray.length
    if(HiddenTaskArray.length == 0)
    {
      tasks.style.display = 'grid'
    HiddenTasks.style.display = 'none'
    document.getElementById('nofarctasks').style.display = 'none'
    document.getElementById('nofarctasks').style.display = 'none'
    document.getElementById('noftasks').style.display = 'inline'
    document.getElementById('noftasks').style.display = 'inline'
    navele1.style.paddingLeft = '15px'
    navele2.style.paddingLeft = '0px'
    navele1.style.borderBottom = '2px solid #fff'
    navele2.style.borderBottom = '2px solid #f7f7f700'
    }
    storeToLocalStorage()
    }
  })
  
}

function hideShowPass()
{
  document.querySelector('.hide-pass').style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'

}
function hideShowPass2()
{
  document.querySelector('.hide-pass2').style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'

}



function hide_password_block()
{
  document.querySelector('.hide-pass').style.display = 'none'
  document.querySelector('.hide-pass2').style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'
}


let sortBtn = document.getElementById('navele3')
let sortOptions = document.getElementById('sortingOptions')

sortBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(tasks.style.display == 'grid')
  {
  if(sortOptions.value == 'تاريخ الإستحقاق '){
  TaskArray.sort(
    (t1, t2) => 
    (t1.date > t2.date) ? 1 : (t1.date < t2.date) ? -1 : 0);
    taskCounter = 0;
    let newCount = 0
    for(t of TaskArray)
       t.number = ++newCount
    reFillTask()
  }

  else
  {
    TaskArray.sort(
      (t1, t2) => 
      (Date.parse(t1.dateCreated) > Date.parse(t2.dateCreated)) ? 1 : (Date.parse(t1.dateCreated) < Date.parse(t2.dateCreated)) ? -1 : 0);
      taskCounter = 0;
      let newCount = 0
      for(t of TaskArray)
         t.number = ++newCount
      reFillTask()
  }
  storeToLocalStorage()
}
else if(HiddenTasks.style.display == 'grid')
{
  if(sortOptions.value == 'تاريخ الإستحقاق '){
    HiddenTaskArray.sort(
      (t1, t2) => 
      (t1.date > t2.date) ? 1 : (t1.date < t2.date) ? -1 : 0);
      HiddenCounter = 0;
      let newCount = 0
      for(t of HiddenTaskArray)
         t.number = ++newCount
      reFillHiddenTask()
    }
  
    else
    {
      HiddenTaskArray.sort(
        (t1, t2) => 
        (Date.parse(t1.dateCreated) > Date.parse(t2.dateCreated)) ? 1 : (Date.parse(t1.dateCreated) < Date.parse(t2.dateCreated)) ? -1 : 0);
        HiddenCounter = 0;
        let newCount = 0
        for(t of HiddenTaskArray)
           t.number = ++newCount
        reFillHiddenTask()
    }
    storeToLocalStorage()
}
})

// local srtorage


function checkTaskArray(it)
{
  TaskArray[it].checked = !TaskArray[it].checked
  reFillTask()
  storeToLocalStorage()
}

function checkHiddenTaskArray(it)
{
  HiddenTaskArray[it].checked = !HiddenTaskArray[it].checked
  reFillHiddenTask()
  storeToLocalStorage()
}

function storeToLocalStorage()
{
  let taskString = JSON.stringify(TaskArray)
  let hiddenTaskString = JSON.stringify(HiddenTaskArray)
  localStorage.setItem("tasks",taskString);
  localStorage.setItem("hiddenTasks",hiddenTaskString);
}



