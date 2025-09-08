// opg10.js
'use strict';

// Main function
function main() {
    let tableHTML = `
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>THIRDS</th>
							<th>Cubic</th>
						</tr>
					</thead>
					<tbody>
			`;
			for (let i = 1; i <= 1000; i++) {
				tableHTML += `
						<tr>
							<td>${i}</td>
							<td>${i * i}</td>
							<td>${i * i * i}</td>
						</tr>
				`;
			}
			tableHTML += `
					</tbody>
				</table>
			`;
			document.write(tableHTML);
    console.log('Script Sucsessful!');
}

// Run main
main();