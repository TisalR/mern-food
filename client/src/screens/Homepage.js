import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../actions/foodActions'
import Food from '../component/Food'
import foods from '../fooddata'

export default function Homepage() {

  const dispatch = useDispatch()

  //const foodsstate = useSelector(state => state.getAllFoodsReducer);

  // const { foods, error, loading } = foodsstate;

  useEffect(() => {
    dispatch(getAllFoods())
  }, []);


  return (
    <div>
      <div className="row">

     

          {foods.map(food => {

            return <div className="col-md-4 p-3">
              <div>
                <Food food={food} />
              </div>
            </div>
          })}

    


      </div>
    </div>
  )
}
