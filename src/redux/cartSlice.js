import { createTheme } from "@mui/material";
import {createSlice} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const successNotify= (notify_input)=>{

    toast.success(notify_input, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


}


const fetchFromLocalStorage= () =>{
    let cart=localStorage.getItem("cart");
    if(cart){
        return JSON.parse(localStorage.getItem("cart"))

    }
    else{
        return []

    }


}

const fetchFavorites = ()=>{

    let favorites=localStorage.getItem("favorites")
    if(favorites){
        return JSON.parse(localStorage.getItem("favorites"))
    }
    else{
        return[]
    }

}

const fetchFavoritesIds = ()=>{

    let favoritesIds=localStorage.getItem("favoritesIds")
    if(favoritesIds){
        
        return JSON.parse(localStorage.getItem("favoritesIds"))
    }
    else{
        
        return[]
    }


}

const storeFavoritesIdsInLocalStorage=(data)=>{

    localStorage.setItem('favoritesIds',JSON.stringify(data))
}

const storeInLocalStorage= (data) =>{
    localStorage.setItem('cart',JSON.stringify(data))

     
}

const storeFavoritesInLocalStorage=(data)=>{

    localStorage.setItem('favorites',JSON.stringify(data))
}

const initialState ={
    carts:fetchFromLocalStorage(),
    favorites:fetchFavorites(),
    favorites_ids:fetchFavoritesIds(),
    ItemCount:0,
    totalAmount:0

}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCard:(state,action)=>{

            const isItemCart=state.carts.find(item => item.id===action.payload.id)

            if(isItemCart){
                const tempCart=state.carts.map(item=>{

                    if(item.id===action.payload.id){

                        let tempQty=item.quantity + action.payload.quantity;
                        
                        return{

                            ...item,quantity:tempQty
                        }
                    }
                    else{
                        return item


                        }



                })

                state.carts = tempCart;
                storeInLocalStorage(state.carts)
                successNotify("Added to Cart")
                
                

            }
            else{

                state.carts.push(action.payload)
                storeInLocalStorage(state.carts)
                successNotify("Added to Cart")
            }


        },
        removeFromCard:(state,action)=>{
    
            const tempCart=state.carts.filter(item=>item.id !== action.payload)
            state.carts=tempCart
            storeInLocalStorage(state.carts)
            successNotify("Cart updated")
    
        },
        clearCart:(state)=>{
    
            state.carts=[]
            storeInLocalStorage(state.carts)
    
        },
        getCartTotal:(state)=>{

    
            state.totalAmount=state.carts.reduce((cartTotal,cartItem) =>{
    
                return cartTotal += cartItem.price*cartItem.quantity
            },0)
            state.itemCount=state.carts.length
            
    
        },
        alterFavorites:(state,action)=>{


            const IsInFavorite=state.favorites.find(item => item.id===action.payload.id)

            if(!IsInFavorite){

                
                state.favorites.push(action.payload)
                state.favorites_ids.push(action.payload.id)
                storeFavoritesIdsInLocalStorage(state.favorites_ids)
                storeFavoritesInLocalStorage(state.favorites)
                
                
                
                
                
            }
            else{

                const tempFavIds=state.favorites_ids.filter(item=>item !== action.payload.id)
                state.favorites_ids=tempFavIds
                const tempFav=state.favorites.filter(item=>item.id !== action.payload.id)
                state.favorites=tempFav
                storeFavoritesIdsInLocalStorage(state.favorites_ids)        
                storeFavoritesInLocalStorage(state.favorites)

                if(window.location.pathname==="/favorites"){

                    successNotify('Favorites updated')
                }
                
            }


        },
        changeQuantity:(state,action)=>{

            

            const tempCart=state.carts.map(item=>{

                

                if(item.id===action.payload.id){

                    

                    if(action.payload.type==="inc"){

                        

                        let tempQty=++item.quantity    
                        return{
                             ...item,quantity:tempQty
                            }

                    }

                    else if(action.payload.type==="dec"){

                        let tempQty=--item.quantity                
                        return{
                             ...item,quantity:tempQty
                            }



                    }

                    
                }

                else return item
            })

            state.carts = tempCart;
            storeInLocalStorage(state.carts)








        }

    }
    


})

export const {addToCard,removeFromCard,clearCart,getCartTotal,alterFavorites,changeQuantity}=cartSlice.actions
export default cartSlice.reducer