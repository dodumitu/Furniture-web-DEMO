export default class RoomName {
    $title

    constructor(title) {
        this.$title = document.createElement("p");
        this.$title.textContent = title;
        this.$title.setAttribute("class", "mt-8 mb-12 ml-2 text-3xl text-gray-400");
    }

    render() {
        return this.$title;
    }
}