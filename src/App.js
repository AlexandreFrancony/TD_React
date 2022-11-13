import "./App.css"
import FormGpu from "./Components/Form.js"
import ReadGpu from "./Components/Read.js"
import EditGpu from "./Components/Edit.js"
import React, { useState, useEffect } from "react"

//Create a CRUD app using React and json server as a backend server to store data about GPUs, and their prices.

function App() {
	const [gpus, setGpus] = useState([])
	const [editedGpu, setEditedGpu] = useState(null)

	async function getGpu() {
		const data = await fetch("http://localhost:5000/gpu")
		const gpus = await data.json()

		setGpus(gpus)
	}

	useEffect(() => {
		getGpu()
	}, [])

	return (
		<div className="total">
			<h1>
				{" "}
				<strong>GPU Market</strong>{" "}
			</h1>
			<div className="boxes">
				<h3>Ajouter une GPU</h3>
				<FormGpu getGpu={getGpu} />
			</div>
			<div className="boxes">
				<h3>Affichage de tout les GPUs</h3>
				<ReadGpu getGpu={getGpu} gpus={gpus} setEditedGpu={setEditedGpu} />
			</div>
			{editedGpu && (
				<div className="boxes">
					<h3>Editer GPU</h3>
					<EditGpu
						getGpu={getGpu}
						editedGpu={editedGpu}
						setEditedGpu={setEditedGpu}
					/>
				</div>
			)}
		</div>
	)
}

export default App

/*
!first try, to supress, kept for reference
function App() {
  return (
    <div className="App">
      <h1>GPU market</h1>
      <h2>Add a GPU</h2>
      <h3>Here you can add a GPU and its price in the list below.</h3>
      <div className="form">
        <label>GPU Name </label>
        <input type="text" name="name" placeholder="Enter GPU Name" />
        <label> Price </label>
        <input type="text" name="price" placeholder="Enter Price" />
        <label> Stock </label>
        <input type="text" name="stock" placeholder="Enter Stock" />
        <br></br>
        <button>Submit</button>
      </div>

      <div className="card">
        <h2>GPU List</h2>
        <h3>Here you can view all the GPUs stocked in our database, edit them and delete them.</h3>
        <p>Price</p>
        <div className="btn">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
*/
