import TextView from "./view/text-view/text-view";
import Aview from "./view/a-view/a-view";
import Bview from "./view/b-view/b-view";
import Cview from "./view/c-view/c-view";
import Dview from "./view/d-view/d-view";

export default class App {

    constructor() {

    }

   start() {
        new Aview().start();
    }
}