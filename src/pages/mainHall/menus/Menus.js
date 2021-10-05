import React, { useState, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import ItemCard from '../../../components/itensMenu/ItemCard';
import CartArea from '../../../components/itensMenu/CartArea';

import './Menus.css';

function Menus () {

    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const history = useHistory();
    const token = localStorage.getItem('userToken');
    const [itemsList, setItemsList] = useState([]);
    const [table, setTable] = useState('1');
    const [client, setClient] = useState('');
   
    useEffect(() => {
      fetch('https://lab-api-bq.herokuapp.com/products', {
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          }
        })
          .then(response => response.json())
          .then((json) => {                                
            setAllProducts(json)
            const menus = json.filter((item) => item.type === 'breakfast')
            setSelectedProducts(menus)
            return json;
          });
    }, [token]);
    
    const btnMenus = (e) => {
      e.preventDefault()
      history.push('/menus')
    }

    const btnRequests = (e) => {
      e.preventDefault()
      history.push('/pedidos')
    }

    const btnHistoric = (e) => {
      e.preventDefault()
      history.push('/historico')
    }

    const filterMenu = (meal) => {
      const filterItensByType = allProducts.filter((item) => item.sub_type === meal);
      setSelectedProducts(filterItensByType)
    }
    
    const removeButton = (id) => {
      const item = itemsList.find((item) => item.id === id)
      if(item.qtd > 1){
        setItemsList(
          itemsList.map((x) => x.id === id ? {...item, qtd: item.qtd -1 } : x
          )
        );
      } else {
        setItemsList(
          itemsList.filter((x) => x.id !== id)
        );
      }     
    }

    const addButton = (id) => {
      setItemsList(
          itemsList.map((x) => x.id === id ? {...x, qtd: x.qtd +1 } : x
          )
        );
    }
    
    return(
        <>
          <div>
            <NavBar />
          </div>

            <div className="container-btn-menu">
              <Button 
                text="🍴 Menus" 
                type="submit"
                onClick={btnMenus} 
                className="buttons buttons-menu" 
              /> 
              <Button 
                text="🔔 Pedidos" 
                type="submit"
                onClick={btnRequests} 
                className="buttons buttons-menu" 
              /> 
              <Button 
                text="📋 Histórico" 
                type="submit"
                onClick={btnHistoric} 
                className="buttons buttons-menu" 
              /> 
            </div>

            <div className="container-info">
              <label className="info-card">Mesa:
                <select className="select-table" onChange={(e) => setTable(e.target.value)} value={table}>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                </select>  
              </label>
              <label className="info-card">Cliente: 
                <input 
                  className="input-client" 
                  type="text" 
                  name="nameClient" 
                  onChange={(e) => 
                    setClient(e.target.value)} 
                    value={client}>
                </input>
              </label>
            </div>

            <div className="container-btn-cardapio">
              <Button 
                text="Café da Manhã"
                onClick={() => filterMenu('breakfast')}
                className="btn-cardapio" 
              />
              <Button 
                text="Hamburguer"
                onClick={() => filterMenu('hamburguer')}
                className="btn-cardapio" 
              />
              <Button 
                text="Aperitivos"
                onClick={() => filterMenu('side')}
                className="btn-cardapio" 
              />
              <Button 
                text="Bebidas"
                onClick={() => filterMenu('drinks')}
                className="btn-cardapio" 
              />
            </div>

            <CartArea 
              arrItem={itemsList}
              removeButton={removeButton}
              addButton={addButton}
            >
            </CartArea>
            
            <div className="container-main-products">
              {selectedProducts.map((item) => {
                return (
                  <ItemCard 
                    {...item}
                      key={item.id}
                      onClick={() => {
                        const cartProducts = itemsList.find((product) => product.id === item.id)
                        if(cartProducts){
                          setItemsList(
                            itemsList.map((x) => x.id === item.id ? {...cartProducts, qtd: cartProducts.qtd +1 } : x
                            )
                          );
                        } else {
                          setItemsList([...itemsList, { name: item.name, price: item.price, id: item.id, qtd: 1 }])
                        }
                      }}
                  />
                )
              })}
            </div>
            
          <Footer 
            className="footer"
          />
        </>
    );
};

export default Menus;