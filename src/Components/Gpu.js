export function Gpu({ getGpu, gpu, setEditedGpu }) {
	const deleteGpu = async () => {
		await fetch(`http://localhost:5000/gpu/${gpu.id}`, {
			method: "DELETE"
		}).then(() => getGpu())
	}

	return (
		<tr>
			<td>{gpu.id}</td>
			<td>{gpu.name}</td>
			<td>{gpu.price} €</td>
			<td>{gpu.stock}</td>
			<td>
				<div className="btn">
					<button onClick={() => setEditedGpu(gpu)}>Edit</button>
					<button onClick={deleteGpu}>Delete</button>
				</div>
			</td>
		</tr>
	)
}
