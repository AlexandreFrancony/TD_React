import { useState } from "react"

const FormGpu = ({ getGpu }) => {
	const [gpu, setGpu] = useState({
		name: "",
		price: "",
		stock: ""
	})

	async function postGpu(e) {
		e.preventDefault()

		await fetch("http://localhost:5000/gpu", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ ...gpu })
		}).then(() => getGpu())
	}

	return (
		<form onSubmit={postGpu}>
			<input
				type="text"
				name="name"
				placeholder="GPU's Name"
				onChange={(e) => setGpu({ ...gpu, name: e.target.value })}
			/>
			<input
				type="number"
				name="price"
				placeholder="GPU's Price"
				onChange={(e) => setGpu({ ...gpu, price: e.target.value })}
			/>
			<input
				type="number"
				name="stock"
				placeholder="Stock"
				onChange={(e) => setGpu({ ...gpu, stock: e.target.value })}
			/>
			<button className="btn-submit" type="submit">
				{!gpu.id ? "Add new GPU" : "Save GPU"}
			</button>
		</form>
	)
}

export default FormGpu
