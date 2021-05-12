const app = new Vue(

    {
        el: '#vueapp',
        data: {
            albumList:[],
            coverartList:[],

            },
            methods:{
            },
           
               mounted()  {
                    axios.get("https://flynn.boolean.careers/exercises/api/array/music")          
                    .then((resp)=> {
                        for(let i = 0; i < 10; i ++)
                        this.albumList.push((resp.data.response)[i]);
                     });
                     
                },    
            

        }

);





