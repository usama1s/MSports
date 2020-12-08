// drop down menu
// let dropDown = document.getElementById('dropDown');
// let drop = document.getElementsByClassName('drop')[0];
// dropDown.onmouseenter = () => {
//     drop.classList.toggle('show');
// }
// dropDown.onmouseleave = () => {
//     drop.classList.toggle('show');
// }

// Tab Change Functionality
 let changeTab = (tabName,e) =>{
    let summary = document.getElementsByClassName('summary')[0];
    let stats = document.getElementsByClassName('stats')[0];
    let team = document.getElementsByClassName('team')[0];
    let summaryLink = document.getElementsByClassName('summaryLink')[0];
    let statsLink = document.getElementsByClassName('statsLink')[0];
    let teamLink = document.getElementsByClassName('teamLink')[0];
    console.log(team)

    if(tabName == 'summary'){
        if(summary.classList.contains('showTab') != true){
            summary.classList.add('showTab');
            stats.classList.remove('showTab');
            team.classList.remove('showTab');
        }
        // change link color
        if(summaryLink.classList.contains('active') != true){
            summaryLink.classList.add('active');
            statsLink.classList.remove('active');
            teamLink.classList.remove('active');
        }

    }else if(tabName == 'stats'){
        if(stats.classList.contains('showTab') != true){
            stats.classList.add('showTab');
            summary.classList.remove('showTab');
            team.classList.remove('showTab');
        }
        // change link color
        if(statsLink.classList.contains('active') != true){
            statsLink.classList.add('active');
            summaryLink.classList.remove('active');
            teamLink.classList.remove('active');
        }
    }else if(tabName == 'team'){
        if(team.classList.contains('showTab') != true){
            team.classList.add('showTab');
            stats.classList.remove('showTab');
            summary.classList.remove('showTab');
        }
        // change link color
        if(teamLink.classList.contains('active') != true){
            teamLink.classList.add('active');
            statsLink.classList.remove('active');
            summaryLink.classList.remove('active');
        }
    }

 }


 let changeStatsTab = (tabStatsName,e) =>{
   let laramsLink = document.getElementsByClassName('larams-link')[0];
   let matchupLink = document.getElementsByClassName('matchup-link')[0];
   let tampabayLink = document.getElementsByClassName('tampabay-link')[0];

   let showStatsTab = document.getElementsByClassName('showStatsTab')[0];
   // let matchup = document.getElementsByClassName('matchup')[0];
   // let tampabay = document.getElementsByClassName('tampabay')[0];

   if(tabStatsName == 'larams'){
     if(laramsLink.classList.contains('active-stats') != true){
         laramsLink.classList.add('active-stats');
         matchupLink.classList.remove('active-stats');
         tampabayLink.classList.remove('active-stats');
     }
     if(showStatsTab.classList.contains('showLaramsStatsTab') != true){
         showStatsTab.classList.add('showLaramsStatsTab');
         showStatsTab.classList.remove('showMatchupStatsTab');
         showStatsTab.classList.remove('showTampabayStatsTab');
     }
   }else if(tabStatsName == 'matchup'){
     if(matchupLink.classList.contains('active-stats') != true){
         matchupLink.classList.add('active-stats');
         laramsLink.classList.remove('active-stats');
         tampabayLink.classList.remove('active-stats');
     }

     if(showStatsTab.classList.contains('showMatchupStatsTab') != true){
       showStatsTab.classList.add('showMatchupStatsTab');
         showStatsTab.classList.remove('showLaramsStatsTab');
         showStatsTab.classList.remove('showTampabayStatsTab');
     }
   }else if(tabStatsName == 'tampabay'){
     if(tampabayLink.classList.contains('active-stats') != true){
         tampabayLink.classList.add('active-stats');
         matchupLink.classList.remove('active-stats');
         laramsLink.classList.remove('active-stats');
     }

     if(showStatsTab.classList.contains('showTampabayStatsTab') != true){
       showStatsTab.classList.add('showTampabayStatsTab');
       showStatsTab.classList.remove('showMatchupStatsTab');
         showStatsTab.classList.remove('showLaramsStatsTab');
     }
   }
 }




function openDropdown(id){

  var dropDownLink = document.getElementById(id);
  var dropDownList = document.querySelector("#"+id+" .dropdown-list");
  var allDropDownList = document.getElementsByClassName("dropdown-list");

  if(dropDownList.classList.contains('showDropDown') != true){
    var i;
    for (i = 0; i < allDropDownList.length; i++) {
      allDropDownList[i].classList.remove('showDropDown');
    }
    dropDownList.classList.add('showDropDown');
  }



}


function closeDropdown(id){
  var dropDownLink = document.getElementById(id);
  var dropDownList = document.querySelector("#"+id+" .dropdown-list");
  var allDropDownList = document.getElementsByClassName("dropdown-list");
    var i;
    for (i = 0; i < allDropDownList.length; i++){
    dropDownList.classList.remove('showDropDown');
  }
}


function openDropdownClick(id){
  var dropDownList = document.querySelector("#"+id+" .dropdown-list-schedule");
  var dropdownOpen=false;
  if (dropDownList.classList.contains("showDropDown")){
    dropdownOpen = true;
  }
  closeAllDropdowns();

  if (dropdownOpen===false){
    dropDownList.classList.add('showDropDown');
  }
}

function closeAllDropdowns(){
  var allDropDownListS = document.getElementsByClassName("dropdown-list-schedule");
  var i;
  for (i = 0; i < allDropDownListS.length; i++){
    allDropDownListS[i].classList.remove('showDropDown');
  }
}

function selectThisOption(idd){

  // var parent_id = $("#"+idd).attr('for');
  const selectedOption = document.querySelector("#"+idd);
  const forDD = selectedOption.getAttribute('for');
  // // var selectedOption1 = document.getElementById(parent_id);
  document.querySelector("#"+ forDD + " button span").innerHTML = selectedOption.innerHTML;
}


const alldd = document.getElementsByClassName("dropdown-link-schedule");

for (var i = 0; i < alldd.length; i++) {
  var ddID = alldd[i].getAttribute('id');
  var defaultValue = "#" + ddID +" .default";
  var dBtn = "#" + ddID +" .dd-btn span";
  // alert(document.querySelector(dBtn).innerHTML);
  document.querySelector(dBtn).innerHTML = document.querySelector(defaultValue).innerHTML;
  // alert(document.querySelector(defaultValue).innerHTML);
}

document.addEventListener('click', function(event){
  var clickedInside1 = event.target.classList.contains('dd-btn');
    var clickedInside2 = event.target.classList.contains('dd-btn-span');
      var clickedInside3 = event.target.classList.contains('dd-btn-svg');
if ((clickedInside1) || (clickedInside2) || (clickedInside3) ){

}else{
closeAllDropdowns();
}

  });
