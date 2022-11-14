import { Gpu } from "./Gpu"

const ReadGpu = ({ getGpu, gpus, setEditedGpu }) => {
	return (
		<>
			<table className="tabRead">
				<thead className="theadRead">
					<tr className="headRow">
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Stock</th>
						<th colSpan="2">Options</th>
					</tr>
				</thead>
				<tbody>
					{gpus.map((gpu) => (
						<Gpu
							key={gpu.id}
							getGpu={getGpu}
							gpu={gpu}
							setEditedGpu={setEditedGpu}
						/>
					))}
				</tbody>
			</table>
		</>
	)
}

export default ReadGpu
