// import Room from "./components/Room.js";
export default class CartModal {
  $cartModal;

  $cartHeader;
  $item;
  $price;
  $quantity;

  $cartItems;
  $cartItemRow;
  $cartItemCol;
  $itemImg;
  $itemTitle;
  $itemPrice;

  $cartQuantityCol;
  $cartQuantityInput;
  $delItemBtn;

  $cartTotal;
  $cartTotalTitle;
  $cartTotalPrice;

  constructor() {
    this.$cartModal = document.createElement("div");
    this.$cartModal.setAttribute("class", "modal-body p-4 ");

    this.$cartHeader = document.createElement("div");
    this.$cartHeader.setAttribute("class", "cart-row flex ");

    this.$item = document.createElement("span");
    this.$item.textContent = "Sản phẩm";
    this.$item.setAttribute("class", "w-2/5");

    this.$price = document.createElement("span");
    this.$price.textContent = "Gía";
    this.$price.setAttribute("class", "w-1/5");

    this.$quantity = document.createElement("span");
    this.$quantity.textContent = "Số lượng";
    this.$quantity.setAttribute("class", "w-1/3");

    this.$cartItems = document.createElement('div');
    this.$cartItems.setAttribute('class', "cart-item w-2/5 ")
    this.$cartItemRow = document.createElement('div');
    this.$cartItemRow.setAttribute('class', "cart-row flex")
    this.$cartItemCol = document.createElement('div');
    this.$cartItemCol.setAttribute('class',"cart-column flex items-center bt-1 border-solid mr-4 pb-10 mt-10")
    this.$itemImg = document.createElement('img');
    this.$itemImg.src = "https://nt11.mediawz.com/san-pham/ban-khach-chung-cu/"
    this.$itemImg.setAttribute('class', " w-{75px} h-auto rounded-m")
    this.$itemTitle = document.createElement('span')
    this.$itemTitle.setAttribute('class', "ml-4 ")
    this.$itemTitle.textContent = "#name"
    this.$itemPrice= document.createElement('span')
    this.$itemPrice.setAttribute('class', "w-1/5 ")
    this.$itemPrice.textContent = '#000đ'

    this.$cartQuantityCol = document.createElement('div');
    this.$cartQuantityCol.setAttribute('class', "cart-column flex items-center bt-1 border-solid mr-4 pb-10 mt-10")
    this.$cartQuantityInput = document.createElement('input');
    this.$cartQuantityInput.setAttribute('class', '');
    this.$delItemBtn = document.createElement('button');
    this.$delItemBtn.type = "button";
    this.$delItemBtn.textContent = "Xoá";
    this.$delItemBtn.setAttribute('class',"cursor-pointer p-2 rounded-xl");

    this.$cartTotal = document.createElement('div');
    this.$cartTotal.setAttribute('class',"text-end mt-10 mr-10")
    this.$cartTotalTitle = document.createElement('strong');
    this.$cartTotalTitle.textContent = "Tổng cộng"
    this.$cartTotalTitle.setAttribute('class',"font-bold mr-20")
    this.$cartTotalPrice = document.createElement('span');
    this.$cartTotalPrice.textContent= '#000đ'
    this.$cartTotalPrice.setAttribute('class','')
  }
  render(){
    this.$cartHeader.appendChild(this.$item)
    this.$cartHeader.appendChild(this.$price)
    this.$cartHeader.appendChild(this.$quantity)

    this.$cartItemCol.appendChild(this.$itemImg)
    this.$cartItemCol.appendChild(this.$itemTitle)
    this.$cartItemCol.appendChild(this.$itemPrice)

    this.$cartQuantityCol.appendChild(this.$cartQuantityInput)
    this.$cartQuantityCol.appendChild(this.$delItemBtn)

    this.$cartTotal.appendChild(this.$cartTotalTitle)
    this.$cartTotal.appendChild(this.$cartTotalPrice)

    this.$cartItemRow.appendChild(this.$cartItemCol)
    this.$cartItemRow.appendChild(this.$price)
    this.$cartItemRow.appendChild(this.$cartItemCol)
    this.$cartItemCol.appendChild(this.$delItemBtn)

    this.$cartTotal.appendChild(this.$cartTotalTitle)
    this.$cartTotal.appendChild(this.$cartTotalPrice)

    this.$cartItems.appendChild(this.$cartItemRow)
    this.$cartItems.appendChild(this.$cartTotal)

    this.$cartModal.appendChild(this.$cartHeader)
    this.$cartModal.appendChild(this.$cartItems)

    return this.$cartModal

  }
}
