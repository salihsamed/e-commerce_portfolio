import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../redux/productSlice';
import Loading from '../Loading';
import DetailComp from '../components/detail/DetailComp';

const Details = () => {

    const {id}=useParams();
    const dispatch=useDispatch();
    const {productDetail,productDetailStatus}=useSelector(state => state.products)

    useEffect(()=>{


        dispatch(getProductDetails(id))

    },[dispatch])

    
  return (
    <div>

        {productDetailStatus == "LOADING" ? <Loading/>  : <DetailComp productInfo={productDetail}/>

        }
    </div>
  )
}

export default Details