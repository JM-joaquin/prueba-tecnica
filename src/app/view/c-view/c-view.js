import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.css";


export default class Cview extends View {

    constructor() {
        super(html);
        this.viewNum();
        this.reset();
        this.next();
        this.swap();
    }

    swap(){
        let btn = document.getElementById("swap");
        let color = document.getElementById("color-c");
        let num = sessionStorage.getItem("value");
        num = parseInt(num, 10);
        if(num >= 10){
            color.className = "color-new";
        }
        btn.addEventListener("click", function(){
            if(color.className == "color-c"){
                color.className = "color-new";
            }else if(color.className == "color-new"){
                color.className = "color-c"
            }
        })
    }

    next(){
        let self = this;
        let btn = document.getElementById("next");
        btn.addEventListener("click", function(){
            self.end();
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
        let btn = document.getElementById('reset');
        btn.addEventListener("click", function(){
            sessionStorage.removeItem('value');
            location.reload(true);
        })
    }
}