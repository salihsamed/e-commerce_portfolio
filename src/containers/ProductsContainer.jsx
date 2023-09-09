import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productSlice';
import Loading from '../Loading';
import Product from '../Product';
import {FiFilter} from 'react-icons/fi'
import {BiSortAlt2} from 'react-icons/bi'
import {BsArrowDown, BsArrowUp} from 'react-icons/bs'
import MobileSearchBar from '../components/Home/MobileSearchBar';

const ProductsContainer = () => {


    const[category,setCategory]=useState([]);
    const dispatch = useDispatch();   
    const {products,productsStatus}=useSelector(state => state.products)
    const {searchInput}=useSelector(state =>state.categories)
    const [panelVisibility,setPanelVisibility]=useState(false)
    const [dropdown,setDropdown]=useState(false);
    const [sortBy,setSortBy]=useState("Default")

    
   
   

    

    const switchDropdown=()=>{


       setDropdown(!dropdown)

        
    }

    const ProductProcess = ()=>{

        if(sortBy==="Default"){

            return products.filter(product => category.length === 0 || category.includes(product.category)).filter(product => product.title.toLowerCase().startsWith(searchInput.toLowerCase()))
            .map((product, i) => <Product key={i} product={product}/>)
        }

        else if(sortBy==="priceDown"){

            return products.filter(product => category.length === 0 || category.includes(product.category)).filter(product => product.title.toLowerCase().startsWith(searchInput.toLowerCase())).sort((a,b)=>(a.price-b.price))
            .map((product, i) => <Product key={i} product={product}/>)
        }

        else if(sortBy==="priceUp"){

            return products.filter(product => category.length === 0 || category.includes(product.category)).filter(product => product.title.toLowerCase().startsWith(searchInput.toLowerCase())).sort((a,b)=>(b.price-a.price))
            .map((product, i) => <Product key={i} product={product}/>)
        }

        else if(sortBy==="rating"){

            return products.filter(product => category.length === 0 || category.includes(product.category)).filter(product => product.title.toLowerCase().startsWith(searchInput.toLowerCase())).sort((a,b)=>(b.rating.rate-a.rating.rate))
            .map((product, i) => <Product key={i} product={product}/>)
        }



    }

    

   

    useEffect(() => {
        
        dispatch(getProducts())
        

    },[dispatch])

    const editCategory = (addC,bool) =>{

        if(bool){

            setCategory([...category,addC]);

        }

        else{
            
            
                  
            setCategory(category.filter((item) => item !== addC));

        }
        


    }

    const switchPanelVisibility=()=>{

        setPanelVisibility(!panelVisibility);





    }



  return (
    <div className='mt-5'>

        <div id='title' className='text-center mb-3'>
            <h2 className='text-2xl font-semibold'>Products</h2>
        </div>

        <div className='grid grid-cols-7 gap-0 '>

            <div className='col-span-1 max-sm:hidden pt-3 rounded-l-lg' id='filtre'>
                <div className='grid grid-cols-4 gap-1'>
                    <div className='font-semibold mb-1 col-span-4 text-center'>Categories</div>
                    <div className='col-span-1 flex items-center flex-row-reverse'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="men's clothing" id='men' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                    <div className='col-span-3 '><label htmlFor='men' className='cursor-pointer hover:text-gray-600 max-sm:text-[0.9rem]'>Men's clothing</label></div>
                    <div className='col-span-1 flex items-center flex-row-reverse'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="women's clothing" id='women' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                    <div className='col-span-3'><label htmlFor='women' className='cursor-pointer hover:text-gray-600 max-sm:text-[0.95rem]'>Women's clothing</label></div>
                    <div className='col-span-1 flex items-center flex-row-reverse'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="electronics" id='electronics' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                    <div className='col-span-3'><label htmlFor='electronics'  className='cursor-pointer hover:text-gray-600'>Electronics</label></div>
                    <div className='col-span-1 flex items-center flex-row-reverse'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="jewelery" id='jewelery' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                    <div className='col-span-3'><label htmlFor='jewelery'  className='cursor-pointer hover:text-gray-600'>Jewelery</label></div> 

                    
                </div>

                <div className='font-semibold mb-1 col-span-4 text-center mt-3 '>Sort by</div>
                <div className={`border h-9 w-[70%] max-xl:w-full max-md:w-[118%] flex items-center rounded-sm mx-auto justify-between cursor-pointer px-2 relative dropdown ${dropdown?"border border-orange-500":""}  `} onClick={switchDropdown}>

                    <div className={`dropdown flex items-center `}>{sortBy==="Default"?"Default":""}{sortBy==="priceUp"||sortBy==="priceDown"?"Price":""}{sortBy==="rating"?"Rating":""}{sortBy==="priceDown" && <BsArrowDown className='dropdownhead'/>}{sortBy==="priceUp" && <BsArrowUp className='dropdownhead'/>}</div>
                    
                    <BiSortAlt2 className='text-orange-400 text-2xl dropdown'/>
                     
                    

                    <div className={`absolute top-10 right-0  border w-full dropdown ${dropdown?"":"hidden"}`}>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 gap-1 dropdown' onMouseDown={()=>setSortBy('Default')}><span className='dropdown'>Default</span></div>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 gap-1 dropdown' onMouseDown={()=>setSortBy('priceUp')}><span className='dropdown'>Price</span><BsArrowUp className='dropdown'/></div>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 gap-1 dropdown' onMouseDown={()=>setSortBy('priceDown')}><span className='dropdown'>Price</span><BsArrowDown className='dropdown'/></div>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 dropdown' onMouseDown={()=>setSortBy('rating')}><span className='dropdown' >Rating</span></div>
                        
                    </div>

                    

                    
                </div>

                
            </div>

            <div className='col-span-7 sm:hidden'>

                <div>
                    <MobileSearchBar/>
                </div>

                <div className='flex relative'>

                    <div className='flex items-center w-[50%] border-t border-b border-r gap-3 justify-center h-10 dropdownhead' onClick={switchDropdown}>
                        <BiSortAlt2 className='text-orange-500 text-2xl dropdownhead'/>
                        <span className='text-lg dropdownhead'>Sort by</span>

                    </div>

                    <div className='flex items-center w-[50%] border-t border-b gap-3 justify-center'  onClick={switchPanelVisibility}>
                        <FiFilter className='text-orange-500 text-xl'/>
                        <span className='text-lg'>Filter</span>

                        
                        
                    </div>

                    <div className={`grid grid-cols-5 gap-1 absolute top-10 left-[49.7%]  bg-white z-[1] border-l-[1px] border-b-[1px] pb-2 border-gray-300 w-[50%] ${panelVisibility?"":"hidden"} rounded-b-md`}>
                            <div className='font-semibold mb-1 col-span-5 text-center'>Categories</div>
                            <div className='col-span-1 flex items-center justify-center'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="men's clothing" id='men_m' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                            <div className='col-span-4 '><label htmlFor='men_m' className='cursor-pointer hover:text-gray-600 max-sm:text-[0.9rem]'>Men's clothing</label></div>
                            <div className='col-span-1 flex items-center justify-center'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="women's clothing" id='women_m' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                            <div className='col-span-4'><label htmlFor='women_m' className='cursor-pointer hover:text-gray-600 max-sm:text-[0.9rem]'>Women's clothing</label></div>
                            <div className='col-span-1 flex items-center justify-center'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="electronics" id='electronics_m' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                            <div className='col-span-4'><label htmlFor='electronics_m'  className='cursor-pointer hover:text-gray-600  max-sm:text-[0.9rem]'>Electronics</label></div>
                            <div className='col-span-1 flex items-center justify-center'><input onChange={(e)=> editCategory(e.target.value,e.target.checked ? true : false)} type='checkbox' value="jewelery" id='jewelery_m' className='accent-orange-400 w-4 h-4 cursor-pointer'/></div>
                            <div className='col-span-4'><label htmlFor='jewelery_m'  className='cursor-pointer hover:text-gray-600  max-sm:text-[0.9rem]'>Jewelery</label></div>      
                    </div>

                    <div className={`absolute top-10 left-0 bg-white border-b border-r w-[50%] dropdown z-10 rounded-b-md ${dropdown?"":"hidden"}`}>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 gap-1 dropdown' onMouseDown={()=>setSortBy('Default')}><span className='dropdown'>Default</span></div>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 gap-1 dropdown' onMouseDown={()=>setSortBy('priceUp')}><span className='dropdown'>Price</span><BsArrowUp className='dropdown'/></div>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 gap-1 dropdown' onMouseDown={()=>setSortBy('priceDown')}><span className='dropdown'>Price</span><BsArrowDown className='dropdown'/></div>
                        <div className='flex  items-center px-2 py-1 hover:bg-gray-50 dropdown' onMouseDown={()=>setSortBy('rating')}><span className='dropdown' >Rating</span></div>
                        
                    </div>

                    

                    

                        
                    
                    

                </div>
                
            </div>


            <div className='col-span-6 max-sm:col-span-7   rounded-r-lg grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2 gap-2 p-5'>
                {productsStatus === "LOADING" ? <Loading/> :<ProductProcess/>}


            </div>
        </div>
    
    
    
    </div>
  )
}

export default ProductsContainer