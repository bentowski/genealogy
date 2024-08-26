import { useState } from 'react'
// import { InputHTMLAttributes } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Formulaire />
      {/* <p>hello world</p> */}
      {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
    </>
  )
}

function Formulaire() {

  const [childrens, setChildrens] = useState<boolean>(false);
  const [married, setMarried] = useState<boolean>(false);

  const isChildrens = () => {
    setChildrens(!childrens);
  };

  const isMarried = () => {
    setMarried(!married);
  };

  return (
    <>
      <div className='container' id='form-new'>
        <Person />
        <Parents />
        <h3>Vie Maritale</h3>
        <div className='row' id="form-married">
          Cette personne est mariée<input type="checkbox" id='married' onChange={isMarried}></input>
          {married && (
            <Weddings />
          )
          }
        </div>
        <h3>Descendance</h3>
        <div className='row' id="form-childrens">
          Cette personne a des enfants<input type="checkbox" id='childrens' onChange={isChildrens}></input>
          {childrens && (
            <Childrens />
          )
          }
        </div>
      </div>
    </>
  )
}

function Person() {
  return (
    <>
      <h3>Ajouter un membre de la famille</h3>
      <div className='section row d-flex justify-content-center' id="person">
        <div className='form-person col-6 d-flex align-items-center flex-column'>
          <Identity type='text' name="name1" id="name1" placeholder="nom" />
          <Identity type='text' name="firstname1" id="firstname1" placeholder="prenom" />
        </div>
        <div className='row col-6 d-flex flex-column align-items-center' id="form-live">
          <input className='col-12' type="date" name="birthdate" id="3" />
          <button className='col-12 exit' id="exit">Cette personne nous a quittés</button>
        </div>
      </div>
    </>
  )
}

function Parents() {
  return (
    <>
      <h3>Parents</h3>
      <div className='section row d-flex justify-content-center' id="parents">
        <div className='row col-6 d-flex align-items-center flex-column' id="parent1">
          <Identity type='text' name="Name" id="Name" placeholder="nom" context="parent1" />
          <Identity type='text' name="Firstname" id="Firstname" placeholder="prenom" context="parent1" />
        </div>
        <div className='row col-6 d-flex align-items-center flex-column' id="parent2">
          <Identity type='text' name="Name" id="Name" placeholder="nom" context="parent2" />
          <Identity type='text' name="Firstname" id="Firstname" placeholder="prenom" context="parent2" />
        </div>
      </div>
    </>
  )
}

function Childrens() {

  const [childs, setChilds] = useState([{ id: 1 }])

  const addChild = () => {
    const lastInputId = childs[childs.length - 1].id
    const newId = lastInputId + 1;
    const newChild = {
      id: newId
    };
    setChilds([...childs, newChild])
  }

  const delChild = (id: number) => {
    setChilds(childs.filter(child => child.id !== id));
  }

  return (
    <div className='row col-12'>
      {
        childs.map((child, index) => {
          return (
            <div id={`${child}`} key={index} >
              <h3>Enfant {`${child.id}`}</h3>
              <Identity type='text' name="Name1" id="Name1" placeholder="nom" context="children" />
              <Identity type='text' name="Firstname1" id="Firstname1" placeholder="prenom" context="children" />
              {
                index == childs.length - 1 && index > 0 && (
                  <button id="child" onClick={() => { delChild(child.id) }}>X</button>
                )
              }
            </div>
          )
        })
      }
      <button className='col-auto' onClick={addChild}>+</button>
    </div >
  )
}

function Weddings() {
  const [weddings, setWeddings] = useState([{ id: 1 }])

  const addWeddings = () => {
    const lastInputId = weddings[weddings.length - 1].id
    const newId = lastInputId + 1;
    const newChild = {
      id: newId
    };
    setWeddings([...weddings, newChild])
  }

  const delWedding = (id: number) => {
    setWeddings(weddings.filter(wedding => wedding.id !== id));
  }
  return (
    <div className='row col-12'>
      {
        weddings.map((wedding, index) => {
          return (

            <div id={`${wedding}`} key={index} >
              <h3>Mariage {`${wedding.id}`}</h3>
              <Identity type='text' name="Name1" id="Name1" placeholder="nom" context="married" />
              <Identity type='text' name="Firstname1" id="Firstname1" placeholder="prenom" context="married" />
              {
                index == weddings.length - 1 && index > 0 && (
                  <button id="wedding" onClick={() => { delWedding(wedding.id) }}>X</button>
                )
              }
            </div>
          )
        })
      }
      <button className='col-auto' onClick={addWeddings}>+</button>
    </div>
  )
}

type IdentityProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  context?: string;
};


function Identity(props: IdentityProps) {

  const [inputs, setInputs] = useState([
    { type: props.type, name: props.name, id: props.id, placeholder: props.placeholder }
  ]);

  const addInput = () => {
    const lastInputId = inputs[inputs.length - 1].id
    const match = lastInputId.match(/\d+$/);
    const newId = match ? parseInt(match[0]) + 1 : 1;
    const newInput = {
      type: props.type,
      name: `${props.name}${newId}`,
      id: `${props.id}${newId}`,
      placeholder: props.placeholder
    };
    setInputs([...inputs, newInput]);
  };

  const delInput = (id: string) => {
    console.log(id);
    setInputs(inputs.filter(input => props.context + input.id !== id));
  }

  return (
    <div className='row col-12' id="form-firstnames">
      {
        inputs.map((input, index) => {

          const thing = props.context + input.id;
          return (
            <div className='row col-10' key={index}>
              <input className='col-10' type={input.type} name={`${props.context}${input.name}`} id={`${props.context}${input.id}`} placeholder={input.placeholder} />
              {index == inputs.length - 1 && index > 0 && (
                <button className="col-2" onClick={() => { delInput(thing) }}>X</button>
              )}
            </div>
          )
        })
      }
      <button className='col-2' onClick={addInput}>+</button>
    </div>
  )
}

export default App
