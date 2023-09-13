AFRAME.registerComponent("banner", {
    schema:{
        itemId: {type:"string", default:""}
    },
    update: function(){
        this.createInfo();
    },
    createInfo: function(){
        const comicPosterRef = {
        stickman1:{
            title: "Stickman: The Tree",
            url: "./assets/stickman1.png",
            description: 'Stickman: The Tree is the first comic in the Stickman series. Stickman enters the world as an nameless being. He sets out to find a name and soon encounters a tree surrounded by many branches and sticks. After picking up a stick, he decides name himself and became Stickman.'
        },
        stickman2:{
            title: "Stickman: The Pool",
            url: "./assets/stickman2.png",
            description: 'Stickman: The Pool is the second comic in the Stickman series. Stickman travels to a local pool to take a swim. He relaxes all day in the big pool. He tries to run to the hot tub, but ended up slipping. He made the news and a wet floor sign was created after him.'
        },
        stickman3:{
            title: "Stickman: The Construction",
            url: "./assets/stickman3.png",
            description: 'Stickman: The Construction is the third comic in the Stickman series. Stickman gets a job outside his local pool as a construction worker. His job is to dig in the middle of the road, but he ended up creating a car crash since he was in the way. It made the news and a construction sign was created after him.'
        },
        stickman4:{
            title: "Stickman: The Operation",
            url: "./assets/stickman4.png",
            description: 'Stickman: The Operation is the fourth and final comic in the Stickman series. Stickman was hired to become a spy agent for a sercet government. His mission was to terminate Twigman. He becomes friends with Twigman undercover. Twigman was very smart and tricked Stickman by posioning him. Stickman dies and gets on the news, and a posion sign was created after him.'
        }};

        const {itemId} = this.data;
        const item = comicPosterRef[itemId]
        const fadeBackgroundEl = document.querySelector("#fade-background");

        const bannerEl = this.createBanner();
        const posterEl = this.createPoster(item);
        const titleEl = this.createTitle(item);
        const descriptionEl = this.createDescription(item);

        bannerEl.appendChild(posterEl);
        bannerEl.appendChild(titleEl);
        bannerEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(bannerEl);
    },
    createBanner(){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0, y:0, z:-1});
        entityEl.setAttribute("geometry", {primitive:"plane", width: 1.5, height: 1});
        entityEl.setAttribute("material", {color: "#000"});
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createPoster(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:-0.41, y:0, z:0.0001})
        entityEl.setAttribute("geometry", {primitive:"plane", width: 0.5625, height: 0.875});
        entityEl.setAttribute("material", {src: item.url});
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createTitle(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0.3, y:0.4, z:0.0001})
        entityEl.setAttribute("text", {
            value: item.title,
            font: "mozillavr",
            color: "#FFF",
            align: "center",
            width: 1.25
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createDescription(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0.3, y:0.3, z:0.0001})
        entityEl.setAttribute("text", {
            value: item.description,
            font: "mozillavr",
            color: "#FFF",
            align: "left",
            baseline: "top",
            width: 0.75,
            wrapCount: 30
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
})