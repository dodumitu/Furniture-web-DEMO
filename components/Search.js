export default class Search {
    $mainContainer;
    $input;
    $search;

    constructor() {
        this.$mainContainer = document.createElement("form");
        this.$mainContainer.setAttribute("class", "hidden");

        this.$input = document.createElement("input");

        this.$search = document.createElement("a");
        this.$search.innerHTML = '<i class="fas fa-search"></i>';
    }

    onClick = (e) => {
        e.preventDefault();
        this.$mainContainer.classList.toggle("hidden");
    }

    render(container) {
        this.$mainContainer.appendChild(this.$input);
        this.$mainContainer.appendChild(this.$search);

        container.appendChild(this.$mainContainer);
    }
}