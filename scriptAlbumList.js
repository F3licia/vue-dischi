const app = new Vue({
        el: '#vueapp',
        data: {
            albumList:[],
            filteredData:[],
            selected:"all"
            },
            methods:{
              
            },
            computed:{

                filtered() {  //non funziona
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
                        for(let i = 0; i < 10; i ++)
                        this.albumList.push((resp.data.response)[i]);
                     });
                     
                },    
            

        

});





