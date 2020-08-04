import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
//import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    const URL = "http://localhost:8080/categorias"
    fetch(URL)
    .then(async(res) =>{
      const resposta =  await res.json();
      setCategorias([
        ...resposta,
      ]);
    });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       "id": 1,
    //       "nome": "Fron End",
    //       "descricao": "Uma categoria bacanuda",
    //       "cor": "cbd1ff"
    //     },
    //     {
    //       "id": 2,
    //       "nome": "Back End",
    //       "descricao": "Uma categoria bacanuda",
    //       "cor": "cbd1ff"
    //     }
    //   ])

    // }, 4 * 1000);
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          {/* <Button> */}

          Cadastrar
          {/* </Button> */}
        </button>
      </form>
      
        {categorias.length=== 0 && (
          <div>
            Loading...
          </div>
        )
        
        }

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PageDefault from '../../../components/PageDefault';
// import FormField from '../../../components/FormField';

// function CadastroCategoria() {
//   const [categorias, setCategorias] = useState(['Teste'])
//   //const [nomecategorias, setNomeCategoria] = useState([]);

//   const valoresIniciais = {
//     nome: '',
//     descricao: '',
//     cor: '#000'
//   }
//   const [values, setValues] = useState(valoresIniciais);

//   function setValue(chave, valor) {
//     // chave: nome, descricao, bla, bli
//     setValues({
//       ...values,
//       [chave]: valor, // nome: 'valor'
//     })
//   }

//   function handleChange(infosDoEvento) {
//     setValue(
//       infosDoEvento.target.getAttribute('name'),
//       infosDoEvento.target.value
//     );
//   }

//   return (
//     <PageDefault>
//       <h1>Cadastro de Categoria: {values.nome}</h1>

//       <form onSubmit={function handleSubmit(event) {
//         event.preventDefault();
//         setCategorias([
//           ...categorias,
//           values
//         ]);
//         setValues(valoresIniciais)
//       }}>

//         {/* <label>
//           Nome da Categoria:
//           <input  value={nomeDaCategoria}
//           onChange={function funcaoHandle(e){ 
//             console.log(e.target.value)
//             setNomeCategoria(e.target.value)
//           }}
//             type="text"
//           />
//         </label> */}

//         <FormField
//           label="Nome da Categoria"
//           type="text"
//           name="nome"
//           value={values.nome}
//           onChange={handleChange}
//         />

//         <FormField
//           label="Descrição:"
//           type="????"
//           name="descricao"
//           value={values.descricao}
//           onChange={handleChange}
//         />

//         <FormField
//           label="Cor"
//           type="color"
//           name="cor"
//           value={values.cor}
//           onChange={handleChange}
//         />

//         <button>
//           Cadastrar
//         </button>
//       </form>

//       <ul>
//         {categorias.map((categoria, indice) => {
//           return (
//             <li key={`${categoria}${indice}`}>
//               {categoria.nome}
//             </li>
//           )
//         })}
//       </ul>

//       <Link to="/">
//         Ir para home
//       </Link>
//     </PageDefault>
//   )
// }

// export default CadastroCategoria;