var burger = {              // creation Objet burger pour tous ce dont j'aurais besoin
    listeLien : document.querySelector('.menu_principal ul'),
    blocImage : document.querySelector('div.menu_burger'),
    image: document.getElementById('icone_burger'),
}

function    setBurgerInv(){             // Une fuction pour mettre les lien en invisible si l'ecran est moins large que 968px
    if(screen.width < 968) {
        burger.listeLien.classList.add('is_invisible')
    }
}

function    affichageBurger(){      // La function qui gere l'affichage du menu burger
    if(burger.listeLien.classList.contains('is_invisible')){
        burger.listeLien.classList.replace('is_invisible', 'is_visible')
        burger.blocImage.style.transform = 'rotate(180deg)'
        setTimeout(function (){
            burger.image.src = "img/icone/croix.svg"
        }, 290)
    }
    else{
        burger.listeLien.classList.replace('is_visible', 'is_invisible')
        burger.image.src = "img/icone/menu.svg"
        burger.blocImage.style.transform = 'rotate(-180deg)'
    }
}

burger.blocImage.addEventListener('click', function(){      // EVenement au click sur le burger
    affichageBurger()
})


window.addEventListener('resize', function(){       // Quand la fenetre est resize on appelle setBurgerInv()
    setBurgerInv()
})

setBurgerInv()  // On appelle au moins la function une fois si l'utilisateur est deja sur telephone 