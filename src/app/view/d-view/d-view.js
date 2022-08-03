import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view.css";

export default class Dview extends View {

    constructor() {
        super(html);
        this.next();
        this.waitForClick();
    }

    next(){
        let self = this;
        let btn = document.getElementById("next");
        btn.addEventListener("click", function(){
            sessionStorage.removeItem('value');
            sessionStorage.setItem('value', 8);
            self.end();
        })
    }

    async waitFor5(){
        return new Promise(()=>{
            setTimeout(() => {
                alert("5 o click");
            }, 5000);
        })
    }

    async click5(){
        let btn = document.getElementById("click");
        btn.addEventListener("click", function(){
            alert("5 o click");
        })
    }

    async waitForClick(){
        let self = this;
        let btn = document.getElementById("click");
        btn.addEventListener("click", function(){
            return new Promise(()=>{
                self.click5();
                self.waitFor5();
            })
        })
    }

}