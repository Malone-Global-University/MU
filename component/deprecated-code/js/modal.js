// ===== Table Filtering & Sorting =====
let currentPage = 1, rowsPerPage = 5;

function applyFilters() {
  const text = document.getElementById("searchText").value.toLowerCase();
  const status = document.getElementById("statusFilter").value;
  const rows = document.querySelectorAll("#taskTable tbody tr");
  rows.forEach(row=>{
    const title=row.cells[1].innerText.toLowerCase();
    const rowStatus=row.cells[4].innerText.toLowerCase();
    const show = (text==="" || title.includes(text)) && (status==="all" || rowStatus===status.toLowerCase());
    row.style.display = show ? "" : "none";
  });
  currentPage = 1;
  updatePagination();
}

function sortTable(colIndex) {
  const table=document.getElementById("taskTable");
  const tbody=table.tBodies[0];
  const rows=Array.from(tbody.rows);
  const asc=!table.asc;
  rows.sort((a,b)=>{
    let valA=a.cells[colIndex].innerText;
    let valB=b.cells[colIndex].innerText;
    if(colIndex===2) return asc?new Date(valA)-new Date(valB):new Date(valB)-new Date(valA);
    return asc?valA.localeCompare(valB):valB.localeCompare(valA);
  });
  rows.forEach(r=>tbody.appendChild(r));
  table.asc=asc;
}

// ===== Pagination =====
function updatePagination(){
  const rows=document.querySelectorAll("#taskTable tbody tr");
  let visibleRows=Array.from(rows).filter(r=>r.style.display!=="none");
  const totalPages=Math.ceil(visibleRows.length/rowsPerPage);
  const start=(currentPage-1)*rowsPerPage;
  const end=start+rowsPerPage;
  visibleRows.forEach((r,i)=> r.style.display=(i>=start && i<end)?"":"none");
  document.getElementById("page-info").textContent=`Page ${currentPage} of ${totalPages}`;
}

function changePage(dir){
  const rows=document.querySelectorAll("#taskTable tbody tr");
  const visibleRows=Array.from(rows).filter(r=>r.style.display!=="none" || r.dataset.always==="true");
  const totalPages=Math.ceil(visibleRows.length/rowsPerPage);
  currentPage=Math.min(Math.max(currentPage+dir,1),totalPages);
  updatePagination();
}

// ===== Modal Add/Edit =====
function openModal(mode, btn=null){
  const modal=document.getElementById("taskModal");
  modal.style.display="block";
  document.getElementById("modal-title").textContent=mode==="add"?"Add Task":"Edit Task";
  const form=document.getElementById("taskForm");
  if(mode==="edit" && btn){
    const row=btn.closest("tr");
    document.getElementById("taskID").value=row.cells[0].innerText;
    document.getElementById("taskTitle").value=row.cells[1].innerText;
    document.getElementById("taskModified").value=row.cells[2].innerText.replace(" ","T");
    document.getElementById("taskVersion").value=row.cells[3].innerText;
    document.getElementById("taskStatus").value=row.cells[4].innerText;
    form.dataset.editingRow=row.rowIndex;
  }else form.reset();
}

function closeModal(){ document.getElementById("taskModal").style.display="none"; }

document.getElementById("taskForm").addEventListener("submit", e=>{
  e.preventDefault();
  const id=document.getElementById("taskID").value;
  const title=document.getElementById("taskTitle").value;
  const modified=document.getElementById("taskModified").value.replace("T"," ");
  const version=document.getElementById("taskVersion").value;
  const status=document.getElementById("taskStatus").value;
  const tbody=document.querySelector("#taskTable tbody");
  if(e.target.dataset.editingRow){
    const row=tbody.rows[e.target.dataset.editingRow-1];
    row.cells[0].innerText=id;
    row.cells[1].innerText=title;
    row.cells[2].innerText=modified;
    row.cells[3].innerText=version;
    row.cells[4].innerText=status;
  } else {
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${id}</td><td>${title}</td><td>${modified}</td><td>${version}</td><td class="status">${status}</td><td><button onclick="openModal('edit',this)">Edit</button></td>`;
    tbody.appendChild(tr);
  }
  closeModal();
  applyFilters();
});

// Close modal on outside click
window.addEventListener("click", e=>{if(e.target.id==="taskModal") closeModal();});
