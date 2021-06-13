const app = new Vue({
        el: '#vueapp',
        data: {
            genresList:[],
            albumList:[],
            filteredData:[],
            selected:"all"
            },
            methods:{
              
            },
            computed:{

                filtered() {  
                    if(this.selected === "all"){
                        return this.albumList
                    } 
                    const filteredData = this.albumList.filter((element) => {
                    
                        return element.genre === this.selected;
                    });
        
                    return filteredData;
                },
            },
               mounted()  {
                    axios.get("https://flynn.boolean.careers/exercises/api/array/music")          
                    .then((resp)=> {
                        this.albumList = resp.data.response;
                        this.albumList.forEach((el) => {
                            if(!this.genresList.includes(el.genre)){
                             this.genresList.push(el.genre);       
                            }
                        })
                     });
                     this.filtered()
                },    
            

        

});





