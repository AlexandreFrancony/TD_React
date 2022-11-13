const EditGpu = ({ getGpu, editedGpu, setEditedGpu }) => {
	async function editGpu(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/gpu/${editedGpu.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedGpu)
		}).then(() => {
			setEditedGpu(null)
			getGpu()
		})
	}

	return (
		<form onSubmit={editGpu}>
			<input
				type="text"
				name="name"
				defaultValue={editedGpu.name}
				placeholder="GPU's Name"
				onChange={(e) => setEditedGpu({ ...editedGpu, name: e.target.value })}
			/>
			<input
				type="number"
				name="price"
				defaultValue={editedGpu.price}
				placeholder="GPU's Price"
				onChange={(e) => setEditedGpu({ ...editedGpu, price: e.target.value })}
			/>
			<input
				type="number"
				name="stock"
				defaultValue={editedGpu.stock}
				placeholder="Stock"
				onChange={(e) => setEditedGpu({ ...editedGpu, stock: e.target.value })}
			/>
			<button className="btn-submit" type="submit">
				Save GPU
			</button>
		</form>
	)
}

export default EditGpu
