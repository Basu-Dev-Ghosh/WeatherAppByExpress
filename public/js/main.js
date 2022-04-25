
const checkbtn=document.getElementById('check-btn');
const input=document.getElementById('input');
const placename=document.getElementById('place-name');
const temp=document.getElementById('temp');
const temph1=document.getElementById('temph1');
const icon=document.getElementById('icon');
const togglerbutton=document.querySelector('.navbar-toggler');
const toggler=document.getElementById('navbarSupportedContent');

const checkWeather = async(event)=>
{
    const value=input.value;
    if(value==""){
        
        placename.innerText="Enter any place";
        temph1.classList.add('hide');

    }
    else{
    try
{
    const url=`http://api.weatherapi.com/v1/current.json?key=da706f928c504a83aa7230110222404&q=${value}`;
    const response=await fetch(url);
    const data= await response.json();
    temph1.classList.remove("hide");
    const arrData=[data];
    placename.innerText=`${arrData[0].location.name}, ${arrData[0].location.country}`;
    temp.innerText=arrData[0].current.temp_c;
    const tempmood=arrData[0].current.condition.text;

    if(tempmood == "Mist"){
        icon.innerHTML=`<i class="fa-solid fa-sun" style="color:yellow"></i>`
    }
    else if(tempmood=='clear' || tempmood=="Clear"){
        icon.innerHTML=`<i class="fa-solid fa-cloud-sun" style="color:green"></i>`
    }
    else if(tempmood=='sunny' || tempmood=="Sunny"){
        icon.innerHTML=`<i class="fa-solid fa-sun" style="color:yellow"></i>`
    }
    else if(tempmood=="Partly cloudy"){
        icon.innerHTML=`<i class="fa-solid fa-clouds-sun" style="color:aqua"></i>`
    }
    else if(tempmood=="Overcast"  || tempmood=="Rainy" || tempmood=="rainy"){
        icon.innerHTML=`<i class="fa-solid fa-cloud-rain" style="color:blue"></i>`
    }
    else{
        icon.innerHTML=`<i class="fa-solid fa-sun" style="color:yellow"></i>`
    
    }
}
    catch{
        placename.innerText="Wrong Input"
        temph1.classList.add("hide");
    }
    }
}
console.log(checkbtn);



checkbtn.addEventListener("click", checkWeather);
togglerbutton.addEventListener('click',()=>{
    if(togglerbutton.classList.contains("collapsed")){
        togglerbutton.classList.remove("collapsed");
        toggler.classList.add("show");
        togglerbutton.ariaExpanded=true;
    }else{
        
        toggler.classList.remove("show");
        togglerbutton.classList.add('collapsed')
        togglerbutton.ariaExpanded=false;
    }
})