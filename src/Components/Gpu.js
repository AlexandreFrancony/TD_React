export function Gpu({ getGpu, gpu, setEditedGpu }) {
	const deleteGpu = async () => {
		await fetch(`http://localhost:5000/gpu/${gpu.id}`, {
			method: "DELETE"
		}).then(() => getGpu())
	}

	return (
		<tr className="tabBody">
			<td>{gpu.id}</td>
			<td>{gpu.name}</td>
			<td>{gpu.price} €</td>
			<td>{gpu.stock}</td>
			<td>
				<div className="btn">
					<button className="editButton" onClick={() => setEditedGpu(gpu)}>Edit</button>
					<button className="deleteButton" onClick={deleteGpu}>Delete</button>
				</div>
			</td>
		</tr>
	)
}
