import TextView from "./view/text-view/text-view";
import Aview from "./view/a-view/a-view";
import Bview from "./view/b-view/b-view";
import Cview from "./view/c-view/c-view";
import Dview from "./view/d-view/d-view";

export default class App {

    constructor() {

    }

    async start() {
        /* await (new TextView("El")).start();
        await (new TextView("proyecto")).start();
        await (new TextView("funciona")).start();
        await (new TextView("correctamente!")).start(); */
        await (new Aview().start());
        await (new Bview().start());
        await (new Cview().start());
        await (new Dview().start());
    }
}