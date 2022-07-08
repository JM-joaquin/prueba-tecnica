import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.css";
import Aview from "../a-view/a-view";
import Dview from "../d-view/d-view";


export default class Cview extends View {
    
    constructor() {
        super(html);
        this.viewNum();
        this.reset();
        this.next();
    }

    next(){
        let self = this;
        let btn = document.getElementById("nextC");
        btn.addEventListener("click", function(){
            self.end(new Dview().start());
        })
    }

    viewNum(){
        let num = sessionStorage.getItem("value");
        num = parseInt(num, 10);
        if(num){
            num = num + 5;
        }else{
            num = 5;
        }
        const numberView = document.getElementById('num');
        const element = document.createElement('div');
        element.innerHTML = `<h2>${num}</h2>`;
        numberView.appendChild(element);
    }

    reset(){
        let self = this;
        let btn = document.getElementById('reset');
        btn.addEventListener("click", function(){
            sessionStorage.removeItem('value');
            self.end(new Aview().start());
        })
    }
}