new Vue({
    el: 'image-slider',
    data: {
        images:[],
        currentNumber: 0,
        timer: null
    },
     created() {
    
      axios.get("http://api.new-feature.sparkhire.com/v1.0/companies/e9aafdd9-d9f3-455e-b495-58d087415857/photos").then((response) => {

       var dataHolder = response.data;
        for (let item of dataHolder) {

                 (this.images).push(item.url);
             }
             console.log(this.images)
      }).catch( error => { console.log(error); });


   
  },

    ready: function () {
        this.startRotation();
        
    },

    methods: {

        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
            console.log(this.images);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    }

});
