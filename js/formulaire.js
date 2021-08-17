class Champs {
    constructor(nom, type) {
        this.type = type
        this.id = 'champ_' + nom
        this.div = document.getElementById('champ_' + nom)
        this.label = ''
        this.champ = { input: document.getElementById(nom) }
        console.log(this)
    }
}

function    choixTexte(type, success){
    if(success) return 'Le champs est rempli correctement.'
    switch(type){
        case 'text':
            return 'Le champ ne doit contenir que des lettres'
        case 'tel':
            return 'Le champ ne doit contenir que des chiffres'
        case 'mail':
            return 'Le mail n\'est pas valide'
        case 'textarea':
            return 'Le champ doit contenir minumum 20 caractères et ne peut pas en contenir plus de 242'       
    }
}

function    selectionCondition(type, e){

    switch(type){
        case 'text':
            return (/^[A-Za-z]+$/.test(e.target.value))
        case 'tel':
            return (/^[0-9]{4,6}$/.test(e.target.value))
        case 'mail':
            return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value))
        case 'textarea':
            return (!(e.target.value.length < 20 || e.target.value.length > 242))
    }
}

function    setFenetre(fenetre){
    fenetre.classList.add('fenetre_aide')
    setTimeout(function(){
        fenetre.style.opacity = '100%'
        
    }, 300)
}

function    setStyleTopNumb(texte){
    for(i=0 ; i<texte.length; i++){
        if(texte[i] === '.'){
            while(texte.length > i){
                texte = texte.substring(0, texte.length - 1)
            }
        }
    }
    taille = Number(taille) * -1
    return `${taille - 20}px`
}

function    setStyleTopNumb(texte){
    for(i=0 ; i<texte.length; i++){
        if(texte[i] === '.'){
            while(texte.length > i){
                texte = texte.substring(0, texte.length - 1)
            }
        }
    }
    console.log(texte)
    texte = Number(texte) * -1
    return `${texte - 20}px`
}

function    deleteFenetreAide(e){
    document.getElementById(`${e.target.id}_aide`).remove()
}

function    quoiAfficher(condition, type, fenetre){
    if(condition){
        let success = true
        fenetre.textContent = choixTexte(type, success)
        let taille = window.getComputedStyle(fenetre).getPropertyValue('height')
        fenetre.style.top = setStyleTopNumb(taille)
        fenetre.style.color = 'rgba(60, 220, 60, 0.65)'
    }
    else{

        let success = false
        fenetre.textContent = choixTexte(type, success)
        let taille = window.getComputedStyle(fenetre).getPropertyValue('height')
        fenetre.style.top = setStyleTopNumb(taille)
        fenetre.style.color = 'rgba(220, 60, 60, 0.65)'
    }
}

function    verification(e, type){        // Verifie si le champ
    if(!(document.getElementById(`${e.target.id}_aide`))){      // Si la fenetre d'aide n'existe pas on la crée et on la place
        let p = document.createElement('p')
        p.id = `${e.target.id}_aide`
        e.target.insertAdjacentElement('beforebegin', p)
    }
    var fenetreAide = document.getElementById(`${e.target.id}_aide`)

    setFenetre(fenetreAide)

    let condition = selectionCondition(type , e)

    quoiAfficher(condition, type, fenetreAide)

}


let nom = new Champs('nom', 'text')
let prenom = new Champs('prenom', 'text')
let telephone = new Champs('telephone', 'tel')
let mail = new Champs('mail', 'mail')
let message = new Champs('message', 'textarea')

nom.champ.input.addEventListener('input', function(e){
    verification(e, nom.type)
})
prenom.champ.input.addEventListener('input', function(e){
    verification(e, prenom.type)
})
telephone.champ.input.addEventListener('input', function(e){
    verification(e, telephone.type)
    
})
mail.champ.input.addEventListener('input', function(e){
    verification(e, mail.type)
})
message.champ.input.addEventListener('input', function(e){
    verification(e, message.type)
})

nom.champ.input.addEventListener('focusin', function(e){
    verification(e, nom.type)
})
prenom.champ.input.addEventListener('focusin', function(e){
    verification(e, prenom.type)
})
telephone.champ.input.addEventListener('focusin', function(e){
    verification(e, telephone.type)
})
mail.champ.input.addEventListener('focusin', function(e){
    verification(e, mail.type)
})
message.champ.input.addEventListener('focusin', function(e){
    verification(e, message.type)
})

nom.champ.input.addEventListener('focusout', function(e){
    deleteFenetreAide(e)
})
prenom.champ.input.addEventListener('focusout', function(e){
    deleteFenetreAide(e)
})
telephone.champ.input.addEventListener('focusout', function(e){
    deleteFenetreAide(e)
})
mail.champ.input.addEventListener('focusout', function(e){
    deleteFenetreAide(e)
})
message.champ.input.addEventListener('focusout', function(e){
    deleteFenetreAide(e)
})