// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const cursors = document.querySelectorAll(".cursor")
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
window.addEventListener("mousemove",(e)=>{
    cursors.forEach((cursor)=>{
        cursor.style.top = e.y +"px";
        cursor.style.left = e.x +"px";
    })
    
})

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
