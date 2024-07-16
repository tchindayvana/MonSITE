/*const image = document.getElementById('image');
let rotationAngle = 0;
function rotationImage(){
    rotationAngle +=50;
    image.style.transform ='  rotate(${rotationAngle}deg)';
}
image.addEventListener('click ',rotationImage());*/
// Sélectionner l'élément avec l'ID 'myImage'
const image = document.getElementById('myImage');

// Ajouter un événement 'click' à l'image
image.addEventListener("click", function(){
    // Ajouter la classe 'rotate' à l'image lorsqu'elle est cliquée
    image.classList.add("rotate");
});

// Ajouter un événement 'mouseover' à l'image
image.addEventListener("mouseover", function(){
    // Retirer la classe 'rotate' de l'image lorsqu'elle est survolée
    image.classList.remove("rotate");
});

// Exécuter la fonction lorsque le document est complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément avec la classe 'bubble-container'
    const bubbleContainer = document.querySelector('.bubble-container');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            // Ajouter une lettre ou un chiffre aléatoire à la couleur
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Fonction pour créer une bulle
    function createBubble() {
        // Créer un nouvel élément div
        const bubble = document.createElement('div');
        // Ajouter la classe 'bubble' au nouvel élément
        bubble.classList.add('bubble');
        // Positionner la bulle à une position horizontale aléatoire
        bubble.style.left = `${Math.random() * 100}%`;
        // Définir une durée d'animation aléatoire entre 5 et 15 secondes
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        // Définir une couleur de fond aléatoire pour la bulle
        bubble.style.backgroundColor = getRandomColor();
        // Ajouter la bulle à l'élément 'bubble-container'
        bubbleContainer.appendChild(bubble);

        // Retirer la bulle après 15 secondes
        setTimeout(() => {
            bubble.remove();
        }, 15000);
    }

    // Créer une nouvelle bulle toutes les 500 millisecondes
    setInterval(createBubble, 500);
});
/*
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.scroll-container');
    const items = document.querySelectorAll('.item');
    const images = document.querySelectorAll('.item img');

    let currentIndex = 0;
    const totalItems = items.length;
    const slideInterval = 2000; // Intervalle de défilement en millisecondes (2 secondes)
    const itemWidth = items[0].clientWidth; // Largeur d'un élément (assumant que tous ont la même largeur)

    // Clone des premiers et derniers éléments pour un défilement infini
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[totalItems - 1].cloneNode(true);

    slider.appendChild(firstClone); // Ajoute le clone du premier élément à la fin
    slider.insertBefore(lastClone, items[0]); // Insère le clone du dernier élément au début

    // Ajuste le décalage initial pour montrer le premier élément réel
    slider.style.transform = `translateX(-${itemWidth}px)`;

    function nextSlide() {
        currentIndex++;

        // Animation pour déplacer le slider
        slider.style.transition = 'transform 0.3s ease-in-out'; // Durée de transition réduite
        slider.style.transform = `translateX(-${itemWidth * (currentIndex + 1)}px)`;
    }

    function transitionEnd() {
        // Si on atteint le clone du dernier élément, retourne au premier élément réel sans animation
        if (currentIndex >= totalItems) {
            currentIndex = 0;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${itemWidth}px)`;
        }
        // Si on atteint le clone du premier élément, va au dernier élément réel sans animation
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${itemWidth * (currentIndex + 1)}px)`;
        }
    }

    slider.addEventListener('transitionend', transitionEnd);

    setInterval(nextSlide, slideInterval); // Démarre le défilement automatique

    // Effet spécial au survol
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)'; // Zoom légèrement sur l'image au survol
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; // Retour à la taille normale après le survol
        });
    });
});*/
let cart = [];
const cartSection = document.getElementById('cart-section');
const viewCartBtn = document.getElementById('view-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const clearCartButton = document.getElementById('clear-cart');
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const productElement = event.target.closest('.item');
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);

            addToCart(productName, productPrice);
            showSuccessMessage();
            updateCartDisplay();
        });
    });

    clearCartButton.addEventListener('click', function() {
        cart = [];
        updateCartDisplay();
    });

    cartItemsElement.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.dataset.index;
            removeFromCart(index);
            updateCartDisplay();
        }
    });

    viewCartBtn.addEventListener('click', function() {
        cartSection.classList.add('show');
    });

    closeCartBtn.addEventListener('click', function() {
        cartSection.classList.remove('show');
    });
});

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
}

function removeFromCart(index) {
    cart.splice(index, 1);
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';

    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price;

        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} €`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Supprimer';
        removeButton.classList.add('remove-item');
        removeButton.setAttribute('data-index', index);
        
        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
    });

    totalPriceElement.textContent = totalPrice;
}

function showSuccessMessage() {
    alert('Produit ajouté au panier avec succès !');
}
