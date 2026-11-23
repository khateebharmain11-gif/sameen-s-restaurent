// SAMEEN'S RESTAURANT WEBSITE

const dishes = [
    {
        id: 1,
        name: "Truffle Cream Pasta",
        category: "mains",
        price: 549,
        description: "Creamy pasta with mushrooms, parmesan and truffle.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900"
    },
    {
        id: 2,
        name: "Herb Grilled Chicken",
        category: "mains",
        price: 629,
        description: "Juicy grilled chicken with herbs and vegetables.",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900"
    },
    {
        id: 3,
        name: "mandi",
        category: "mains",
        price: 649,
        description: "A delicious and aromatic rice dish.",
        image: "https://dukaan.b-cdn.net/1000x1000/webp/projecteagle/images/2ccdc7fa-0e83-482f-944a-dc7dd4353fbc.jpg"
    },
    {
        id: 4,
        name: "Crispy Calamari",
        category: "starters",
        price: 389,
        description: "Crispy calamari served with lemon dip.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900"
    },
    {
        id: 5,
        name: "Garden Salad",
        category: "starters",
        price: 159,
        description: "Fresh vegetables with a delicious dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900"
    },

    {
        id: 6,
        name: "veg soup",
        category: "starters",
        price: 119,
        description: "Fresh vegetables with a delicious dressing.",
        image: "https://www.cookingclassy.com/wp-content/uploads/2014/10/vegetable-soup-7.jpg"
    }, 

    {
        id: 7,
        name: "Chocolate Fondant",
        category: "desserts",
        price: 299,
        description: "Warm chocolate cake with a molten centre.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900"
    },
    {
        id: 8,
        name: "Pistachio Cheesecake",
        category: "desserts",
        price: 329,
        description: "Creamy cheesecake with pistachio topping.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=900"
    },
    {
        id: 9,
        name: "black forest triffle",
        category: "desserts",
        price: 229,
        description: "Creamy cheesecake with nuts topping.",
        image: "https://heartfultable.com/wp-content/uploads/2020/11/Black-Forest-Trifle-Cups.jpg"
    },
{
        id: 10,
        name: "Signature cutlet",
        category: "snacks",
        price: 59,
        description: "fresh and tasty.",
        image: "https://tse3.mm.bing.net/th/id/OIP.h1T6SR3qe6RVhmu4GHEFkAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 11,
        name: "spring roll",
        category: "snacks",
        price: 49,
        description: "fresh and tasty.",
        image: "https://tse1.mm.bing.net/th/id/OIP.WOg6vl3C42vkkKINvUY7CwHaGH?r=0&w=1200&h=992&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 12,
        name: "sandwich",
        category: "snacks",
        price: 89,
        description: "delicious.",
        image: "https://images.wisegeek.com/club-sandwich-on-plate-with-pickle.jpg"
    },
    {
        id: 13,
        name: "Signature Iced Latte",
        category: "drinks",
        price: 219,
        description: "Smooth espresso with chilled milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900"
    },
    {
        id: 14,
        name: "coffee",
        category: "drinks",
        price: 179,
        description: "Smooth espresso with chilled milk.",
        image: "https://tse2.mm.bing.net/th/id/OIP.FX7XDuuXfZo2NmfJobswtwHaFk?r=0&w=626&h=471&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 15,
        name: "oreo shake",
        category: "drinks",
        price: 99,
        description: "Smooth shake with chilled milk.",
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2024/02/Oreo-Milkshake.jpg"
    },

    
];

const money = price =>
    "₹" + Number(price).toLocaleString("en-IN");

function getCart() {
    return JSON.parse(
        localStorage.getItem("sameensCart") || "[]"
    );
}

function saveCart(cart) {
    localStorage.setItem(
        "sameensCart",
        JSON.stringify(cart)
    );
    updateCartCount();
}

function updateCartCount() {
    const count = document.getElementById("cart-count");

    if (count) {
        count.textContent = getCart().reduce(
            (total, item) => total + item.qty,
            0
        );
    }
}

// ADD TO CART

function addToCart(id) {
    let cart = getCart();

    let item = cart.find(x => x.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveCart(cart);

    alert("Delicious choice! Added to your cart.");
}

// BUY NOW

function buyNow(id) {
    let cart = getCart();

    let item = cart.find(x => x.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveCart(cart);

    window.open("checkout.html", "_blank");
}

// FOOD DETAILS

function openDish(id) {
    window.open(
        "food-detail.html?id=" + id,
        "_blank"
    );
}

// MENU DISPLAY

function renderMenu() {
    const grid = document.getElementById("menu-grid");

    if (!grid) return;

    grid.innerHTML = dishes.map(d => `
        <div class="col-md-6 col-lg-4 dish-col"
             data-category="${d.category}">

            <div class="food-card">

                <img
                    src="${d.image}"
                    class="food-img"
                    alt="${d.name}"
                    onclick="openDish(${d.id})">

                <div class="food-info">

                    <h3 onclick="openDish(${d.id})">
                        ${d.name}
                    </h3>

                    <p>${d.description}</p>

                    <h5 class="price">
                        ${money(d.price)}
                    </h5>

                    <div class="d-flex gap-2 mt-3">

                        <button
                            class="btn btn-outline-gold flex-fill"
                            onclick="addToCart(${d.id})">
                            Add to Cart
                        </button>

                        <button
                            class="btn btn-gold flex-fill"
                            onclick="buyNow(${d.id})">
                            Buy Now
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `).join("");

    document.querySelectorAll("[data-filter]").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll("[data-filter]")
                .forEach(b => b.classList.remove("active"));

            button.classList.add("active");

            document.querySelectorAll(".dish-col").forEach(card => {

                const show =
                    button.dataset.filter === "all" ||
                    card.dataset.category === button.dataset.filter;

                card.classList.toggle("d-none", !show);

            });
        });
    });
}

// CART DISPLAY

function renderCart() {
    const root = document.getElementById("cart-content");

    if (!root) return;

    const cart = getCart();

    if (cart.length === 0) {
        root.innerHTML = `
            <div class="text-center py-5">
                <h2>Your cart is empty!</h2>
                <p>Discover something delicious from our menu.</p>
                <a href="menu.html" class="btn btn-gold">
                    Explore Menu
                </a>
            </div>
        `;
        return;
    }

    let total = 0;

    root.innerHTML = `
        <div class="row g-5">
            <div class="col-lg-8">

                ${cart.map(item => {

        const d = dishes.find(x => x.id === item.id);

        if (!d) return "";

        total += d.price * item.qty;

        return `
                        <div class="cart-row d-flex align-items-center gap-3">

                            <img src="${d.image}" class="cart-thumb">

                            <div class="flex-grow-1">

                                <h5>${d.name}</h5>

                                <span class="price">
                                    ${money(d.price)}
                                </span>

                                <div class="d-flex align-items-center gap-2 mt-2">

                                    <button class="qty-btn"
                                        onclick="changeQty(${d.id}, -1)">−</button>

                                    ${item.qty}

                                    <button class="qty-btn"
                                        onclick="changeQty(${d.id}, 1)">+</button>

                                    <button class="btn btn-link text-danger"
                                        onclick="removeItem(${d.id})">
                                        Remove
                                    </button>

                                </div>

                            </div>

                            <strong>
                                ${money(d.price * item.qty)}
                            </strong>

                        </div>
                    `;
    }).join("")}

            </div>

            <div class="col-lg-4">

                <div class="feature-card">

                    <h3>Order Summary</h3>

                    <hr>

                    <div class="d-flex justify-content-between">
                        <strong>Total</strong>
                        <strong class="price">${money(total)}</strong>
                    </div>

                    <a href="checkout.html"
                       class="btn btn-gold w-100 mt-4">
                        Proceed to Checkout
                    </a>

                </div>

            </div>
        </div>
    `;
}

function changeQty(id, amount) {
    let cart = getCart();

    let item = cart.find(x => x.id === id);

    if (item) {
        item.qty += amount;
    }

    cart = cart.filter(x => x.qty > 0);

    saveCart(cart);
    renderCart();
}

function removeItem(id) {
    saveCart(
        getCart().filter(x => x.id !== id)
    );

    renderCart();
}

// CHECKOUT

function renderCheckout() {
    const summary = document.getElementById("checkout-summary");

    if (!summary) return;

    const cart = getCart();

    const total = cart.reduce((sum, item) => {
        const d = dishes.find(x => x.id === item.id);
        return sum + (d ? d.price * item.qty : 0);
    }, 0);

    if (!cart.length) {
        summary.innerHTML = `
            <p>Your cart is empty.
            <a href="menu.html">Browse menu</a></p>
        `;

        document.querySelector("#checkout-form button").disabled = true;
        return;
    }

    summary.innerHTML = `
        <h3>Order Summary</h3>

        ${cart.map(item => {
        const d = dishes.find(x => x.id === item.id);

        return `
                <div class="d-flex justify-content-between py-2">
                    <span>${d.name} × ${item.qty}</span>
                    <strong>${money(d.price * item.qty)}</strong>
                </div>
            `;
    }).join("")}

        <hr>

        <div class="d-flex justify-content-between">
            <strong>Total</strong>
            <strong class="price">${money(total)}</strong>
        </div>
    `;
}

function setupCheckout() {
    const form = document.getElementById("checkout-form");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!getCart().length) return;

        const customer = Object.fromEntries(
            new FormData(form).entries()
        );

        localStorage.setItem(
            "sameensLastOrder",
            JSON.stringify({
                customer: customer.name,
                items: getCart()
            })
        );

        localStorage.removeItem("sameensCart");

        window.location.href = "order-success.html";
    });
}

// INDIVIDUAL FOOD DETAIL PAGE

function renderDetail() {
    const root = document.getElementById("food-detail");

    if (!root) return;

    const id = Number(
        new URLSearchParams(location.search).get("id")
    );

    const d = dishes.find(x => x.id === id);

    if (!d) {
        root.innerHTML = "<h2>Food not found</h2>";
        return;
    }

    root.innerHTML = `
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <img src="${d.image}" class="detail-img">
            </div>

            <div class="col-lg-6">

                <span class="eyebrow">SAMEEN'S SPECIAL</span>

                <h1 class="section-title">${d.name}</h1>

                <p class="body-copy">${d.description}</p>

                <h3 class="price">${money(d.price)}</h3>

                <p class="body-copy">
                    Freshly prepared with carefully selected ingredients.
                </p>

                <button class="btn btn-outline-gold"
                    onclick="addToCart(${d.id})">
                    Add to Cart
                </button>

                <button class="btn btn-gold"
                    onclick="buyNow(${d.id})">
                    Buy Now
                </button>

            </div>
        </div>
    `;
}

// COMMON NAVBAR AND FOOTER

function injectLayout() {

    const nav = document.getElementById("site-nav");

    if (nav) {
        nav.innerHTML = `
            <nav class="navbar navbar-expand-lg sticky-top">

                <div class="container">

             <a class="navbar-brand logo-brand" href="index.html">

    <img src="sameens-logo.png" alt="Sameen's Logo">

    <span class="brand-name">
       <h2> SAMEEN'S</h2>
        <h3>RESTAURANT</h3>
    </span>

</a>

                    <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav">

                        <span class="navbar-toggler-icon"></span>

                    </button>

                    <div class="collapse navbar-collapse" id="mainNav">

                        <ul class="navbar-nav ms-auto">

                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="index.html">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="menu.html">Menu</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="about.html">Our Story</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="gallery.html">Our Gallery</a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="contact.html">Contact</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="review.html">Review</a>
                            </li>
 
                            <li class="nav-item">
                                <a class="nav-link" target="_blank"
                                   href="cart.html">
                                    Cart (<span id="cart-count">0</span>)
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        `;
    }

    const footer = document.getElementById("site-footer");

    if (footer) {
        footer.innerHTML = `
            <footer class="footer">

                <div class="container">

                    <div class="row g-4">

                        <div class="col-md-6">
                            <div class="brand text-white">SAMEEN'S</div>
                            <p class="mt-3">
                                Thoughtfully prepared.
                                Beautifully served.
                                Unforgettable by nature.
                            </p>
                        </div>

                        <div class="col-md-3">
                            <h6>EXPLORE</h6>
                            <p><a href="menu.html" target="_blank">Menu</a></p>
                            <p><a href="about.html" target="_blank">Our Story</a></p>
                            <p><a href="contact.html" target="_blank">Contact</a></p>
                            <p><a href="review.html" target="_blank">Review</a></p>
                        </div>

                        <div class="col-md-3">
                            <h6>LOCATION</h6>
                            <p>Tambaram, Chennai, Tamil Nadu, India</p>
                        </div>

                    </div>

                    <div class="footer-bottom">
                        © ${new Date().getFullYear()} SAMEEN'S.
                        All Rights Reserved.
                    </div>

                </div>

            </footer>
        `;
    }
}

// INITIALIZE WEBSITE

document.addEventListener("DOMContentLoaded", () => {

    injectLayout();

    updateCartCount();

    renderMenu();

    renderCart();

    renderCheckout();

    setupCheckout();

    renderDetail();

    const order = JSON.parse(
        localStorage.getItem("sameensLastOrder") || "null"
    );

    const message = document.getElementById("order-message");

    if (order && message) {
        message.textContent =
            `Thank you, ${order.customer}. Your order has been recorded!`;
    }

});

