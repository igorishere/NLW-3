import Image from "../models/Image"
require('dotenv').config()

export default{
    render(image: Image){
        return{
            id: image.id, 
            url: `${process.env.SERVER_HOST}/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]){
        return images.map(  img => this.render(img) );
    }
}