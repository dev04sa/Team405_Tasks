 
		function addData() { 
			
			let name = 
				document.getElementById("nameInput").value; 
			
			
			
			let table = document.getElementById("outputTable"); 
			let newRow = table.insertRow(table.rows.length); 
			
			
			newRow.insertCell(0).innerHTML = name; 			
			newRow.insertCell(1).innerHTML = 
				'<button onclick="editData(this)">Edit</button>'+ 
				'<button onclick="deleteData(this)">Delete</button>'; 
			
			 
			clearInputs(); 
		} 

		function editData(button) { 
			
			let row = button.parentNode.parentNode; 
			
		
			let nameCell = row.cells[0]; 
			
			
			
			let nameInput = 
				prompt("Enter the updated name:", 
					nameCell.innerHTML); 
			
			
			
			nameCell.innerHTML = nameInput; 
			
		} 
		function deleteData(button) { 
			
			
			let row = button.parentNode.parentNode; 

			
			row.parentNode.removeChild(row); 
		} 
		function clearInputs() { 
			
			
			document.getElementById("nameInput").value = ""; 
			
		} 
	