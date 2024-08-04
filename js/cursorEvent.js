AFRAME.registerComponent('cursor-listener',{
    schema:{
        selectedItemId:{type:'string',default:''},
    },
    init:function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
    },
    handleMouseEnter:function(){
        this.el.addEventListener('mouseenter',()=>{
            // console.log('mouseenter');
            const id = this.el.getAttribute('id');
            // console.log(id)
            const postersId = [
                'AOT',
                'EIS',
                'DS',
                'Hori',
            ];
            if (postersId.includes(id)){
                // console.log("id-matched");
                const mangaConatiner = document.querySelector('#manga-container');
                mangaConatiner.setAttribute("cursor-listener",{
                    selectedItemId : id,
                });
                this.el.setAttribute('material',{
                    color:'#5218fa'
                });
                
            }
        })
    },
    handleMouseLeave:function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selectedItemId} = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute('id');
                if (id == selectedItemId){
                    el.setAttribute('material',{
                        color:'#002147',
                        opacity:1
                    });
                };
            };
        });
    },
});