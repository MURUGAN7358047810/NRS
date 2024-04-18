import React from 'react'
import './exploremenu.css'
import store from './oil1.png'

const ExploreMenu = ({category,setCategory}) => {


     const menu_list = [
        {
            menu_name: "oil1",
            menu_image: store
        },
        {
            menu_name: "oil2",
            menu_image: store
        },
        {
            menu_name: "oil3",
            menu_image: store
        },
        {
            menu_name: "oil4",
            menu_image: store
        },
        {
            menu_name: "oil4",
            menu_image: store
        },
        {
            menu_name: "oil4",
            menu_image: store
        },
        {
            menu_name: "oil4",
            menu_image: store
        },
        {
            menu_name: "oil4",
            menu_image: store
        },
        {
            menu_name: "oil5",
            menu_image: store
        }]
  return (
    <div>
      <div className="explore-menu" id='explore-menu'>
      <h1>Exlpore our menu</h1>
      <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat dolor ipsum nemo, minima fugiat qui illum maxime veritatis expedita.</p>
      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list">
      {
        menu_list.map((item, index)=>{
         return(
            <div key={index} className="explore-menu-list-item">
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" height={175} width={175} />
            <p>{item.menu_name}</p>
            </div>
         )
        })
      }
      </div>
      <hr />
      </div>
    </div>
  )
}

export default ExploreMenu
