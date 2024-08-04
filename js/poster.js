AFRAME.registerComponent("poster", {
    schema: {
    },
    init: function () {
      this.createPoster();
    },
    createPoster: function () {
      const thumnbnailsRef = [
        {
          title:'Attack On Titan',
          id:'AOT',
          url:'./assets/AOT.jpeg'
        },
        {
            title:'Eminence in Shadow',
            id:'EIS',
            url:'./assets/Eminence in Shadow.jpeg'
        },
        {
            title:'Demon Slayer',
            id:'DS',
            url:'./assets/Demon Slayer.jpeg'
        },
        {
            title:'Horimiya',
            id:'Hori',
            url:'./assets/Horimiya.jpg'
        }
      ]
      let pxpos = -30 ;
      let PXPOS = -31.2;
  
      for (const item of thumnbnailsRef){
        this.createThumbnail(item,pxpos);
        this.createBorder(PXPOS,item.id)
        // console.log(item.id)
        pxpos = pxpos + 21;
        PXPOS = PXPOS + 21.82;
      }     
    },
    createThumbnail:function(item,xpos){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 14,
            height: 19,
        });
        entityEl.setAttribute("position", { x:xpos, y:4, z: -25 });
        entityEl.setAttribute("material", { src: item.url });
        this.el.appendChild(entityEl);
        return entityEl;
    },
  
    createBorder:function(xpos,id){
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('id',id)
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('geometry',{
            primitive: "plane",
            width: 15.5,
            height: 21.5,
        })
        entityEl.setAttribute('position',{x:xpos,y:4,z:-26})
        entityEl.setAttribute('material',{
            color:'#002147'
        });
        entityEl.setAttribute('cursor-listener',{

        });
        this.el.appendChild(entityEl)
        return entityEl;
    }
  
  });
  