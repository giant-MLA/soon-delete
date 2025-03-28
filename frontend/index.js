
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");


function handleTabClick(event) {

  tabs.forEach(tab => tab.classList.remove("active"));
  sections.forEach(section => section.classList.remove("active"));

  const clickedTab = event.target;
  clickedTab.classList.add("active");

  
  const targetSectionId = clickedTab.dataset.section;

  
  const targetSection = document.getElementById(targetSectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }
}


tabs.forEach(tab => {
  tab.addEventListener("click", handleTabClick);
});

function showSubMenu(submenuId) {
  const mainMenu = document.querySelector('.main-menu');
  const subMenu = document.getElementById(submenuId + '-submenu');
 

  if (mainMenu) mainMenu.style.display = 'none';
  if (subMenu) subMenu.style.display = 'block';
}


function goBack() {
  const mainMenu = document.querySelector('.main-menu');
  const subMenus = document.querySelectorAll('.hidden');

  if (mainMenu) mainMenu.style.display = 'block'; // Show main menu

  // Hide all submenus
  subMenus.forEach(sub => {
      sub.style.display = 'none';
  });


}
