import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view.css";
import Cview from "../c-view/c-view";

export default class Bview extends View {

    constructor() {
        super(html);
        this.viewNum();
        this.next();
    }

    next(){
        let self = this;
        let btn = document.getElementById("nextB");
        btn.addEventListener("click", function(){
            self.end(new Cview().start());
        })
    }
        
    viewNum(){
        let num = sessionStorage.getItem("value");
        if(!num){
            num = 0;
        }
        const numberView = document.getElementById('num');
        const element = document.createElement('div');
        element.innerHTML = `<h2>${num}</h2>`;
        numberView.appendChild(element);
    }

}
