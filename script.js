import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./components/HomePage.js";
import Room from "./components/Room.js";
import { guestroom, diningroom, bedroom, products } from "./components/ProductApi.js";
import CartModal from './components/CartModal.js'


class Main {
    $container;
    $header;
    $itemsContainer;
    $footer;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.setAttribute('class', "w-{1024px} flex flex-col justify-center items-center m-auto mb-15 mx-auto")

        this.$header = new Header();
        this.$header.$logoEl.addEventListener("click", this.onHomeClick);
        this.$header.$productModal.$guestroom.addEventListener("click", this.onGuestroomClick);
        this.$header.$productModal.$diningroom.addEventListener("click", this.onDiningroomClick);
        this.$header.$productModal.$bedroom.addEventListener("click", this.onBedroomClick);

        this.$itemsContainer = document.createElement("div");

        this.$footer = new Footer();
    }

    onHomeClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        this.$itemsContainer.setAttribute("class", "");
        let html = new HomePage();
        this.$itemsContainer.appendChild(html.render());
    }

    onGuestroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        guestroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$itemsContainer.appendChild(html.render());
        })
        this.$itemsContainer.setAttribute("class", "w-{1024px} flex flex-wrap m-auto grid grid-cols-4");
    }

    onDiningroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        diningroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$itemsContainer.appendChild(html.render());
        })
        this.$itemsContainer.setAttribute("class", "w-{1024px} flex flex-wrap m-auto grid grid-cols-4");
    }

    onBedroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        bedroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$itemsContainer.appendChild(html.render());
        })
        this.$itemsContainer.setAttribute("class", "w-{1024px} flex flex-wrap m-auto grid grid-cols-4");
    }

    render() {
        const homePage = new HomePage();

        this.$itemsContainer.appendChild(homePage.render());

        this.$container.appendChild(this.$header.render());
        this.$container.appendChild(this.$itemsContainer);
        this.$container.appendChild(this.$footer.render());

        return this.$container
    }
}


const app = document.getElementById("root");

const main = new Main();

const cartmd =new CartModal()

app.appendChild(main.render());
app.appendChild(cartmd.render())

