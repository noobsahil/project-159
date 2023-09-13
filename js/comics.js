AFRAME.registerComponent("comics", {
    init: function(){
        this.comicsContainer = this.el;
        this.createComics();
    },
    createComics: function(){
        const comicPosterRef = [{
            id: "stickman1",
            title: "Stickman: The Tree",
            url: "./assets/stickman1.png",
        },{
            id: "stickman2",
            title: "Stickman: The Pool",
            url: "./assets/stickman2.png",
        },{
            id: "stickman3",
            title: "Stickman: The Construction",
            url: "./assets/stickman3.png",
        },{
            id: "stickman4",
            title: "Stickman: The Operation",
            url: "./assets/stickman4.png",
        },];

        let previousXPosition = -43.875;

        for (var item of comicPosterRef){
            const posX = previousXPosition + 17.5;
            const posY = 0;
            const posZ = -30;
            const position = {x:posX, y:posY, z:posZ};
            previousXPosition = posX;

            const borderEl = this.createBorder(position, item);
            const comicPosterEl = this.createPoster(item);
            const titleEl = this.createTitle(item);
            
            borderEl.appendChild(comicPosterEl);
            borderEl.appendChild(titleEl);

            this.comicsContainer.appendChild(borderEl)
        }
    },
    createBorder(position, item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", item.id);
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("geometry", {primitive:"plane", width: 10, height: 15});
        entityEl.setAttribute("material", {color: "#FFF"});
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("cursor-event", {})
        return entityEl;
    },
    createPoster(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("geometry", {primitive:"box", width: 9, height: 14, depth:0.1});
        entityEl.setAttribute("material", {src: item.url});
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createTitle(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0, y:-9, z:0});
        entityEl.setAttribute("text", {
            value: item.title,
            font: "aileronsemibold",
            color: "#000",
            align: "center",
            width: 30
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
})