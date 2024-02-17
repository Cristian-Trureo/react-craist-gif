import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = ()=> {

  const [categories, setCategories] = useState(['naruto'])

  const onAddCategory = (newCategory) =>{

    // este if verifica si la nueva categoria ya existe, si existe hace el return e impide usar setCategories (no se agrega nada) (la linea de abajo es la del profe)
    // if(categories.includes(newCategory))return   

    //esto lo agregue para no repetir categorias aunque tengan o no mayusculas...
    const lowercaseCategories = categories.map(category => category.toLowerCase());
    if (lowercaseCategories.includes(newCategory.toLowerCase())) return;

    // categories.push(newCategory)
    // Desectruturación reemplazando 'push'
    setCategories([newCategory, ...categories ])
    // setCategories(cat => [...cat, 'Ranma'])

  }
  

  return (
    <>
    <h1>Gifs Craist</h1>

      <AddCategory 
      // setCategories={ setCategories } 
      // cuando lleva la palabra "on" es porque esta emitiendo algo (es un patron comun)
        onNewCategory={(value) => onAddCategory(value)} // esto(onNewCategory) es una props
      />

      { 
      categories.map((category) => ( 
        <GifGrid 
          key={category} 
          category={category}
        />
      )) 
      }

    </>
  )
}

export default GifExpertApp
