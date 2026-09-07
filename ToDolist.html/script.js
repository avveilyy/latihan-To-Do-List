// ==========================
// ELEMENT
// ==========================

const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyState = document.getElementById("emptyState");
const progressFill = document.getElementById("progressFill");
const STORAGE_KEY = 'To-do list';


// ==========================
// TAMBAH TUGAS
// ==========================

// Tombol Add
addButton.addEventListener("click", addTask);


// Tekan Enter untuk menambah
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function addTask() {

    const taskText = taskInput.value.trim();

    // Jika input kosong
    if (taskText === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }


    // Membuat li
    const li = document.createElement("li");
    li.classList.add("task-item");


    // ==========================
    // CHECKBOX
    // ==========================

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");


    // ==========================
    // TEKS TUGAS
    // ==========================

    const span = document.createElement("span");

    span.classList.add("task-text");
    span.textContent = taskText;


    // ==========================
    // TOMBOL HAPUS
    // ==========================

    const deleteButton = document.createElement("button");

    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Hapus";


    // ==========================
    // CHECKBOX DIKLIK
    // ==========================

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }

        updateTaskCount();
        updateProgress();
    });


    // ==========================
    // HAPUS TUGAS
    // ==========================

    deleteButton.addEventListener("click", function () {

        li.remove();

        updateTaskCount();
        updateEmptyState();
        updateProgress();

    });


    // ==========================
    // MASUKKAN KE LIST
    // ==========================

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);


    // Kosongkan input
    taskInput.value = "";


    // Update
    updateTaskCount();
    updateEmptyState();
    updateProgress();
}


// ==========================
// SEARCH TUGAS
// ==========================

searchInput.addEventListener("input", function () {

    const keyword = searchInput.value.toLowerCase().trim();

    const tasks = taskList.querySelectorAll("li");

    let found = false;


    // Cari tugas
    tasks.forEach(function (task) {

        const text = task
            .querySelector(".task-text")
            .textContent
            .toLowerCase();


        if (text.includes(keyword)) {

            task.style.display = "flex";

            found = true;

        } else {

            task.style.display = "none";

        }

    });


    // ==========================
    // SEARCH KOSONG
    // ==========================

    if (keyword === "") {

        if (tasks.length === 0) {

            emptyState.style.display = "block";

            emptyState.innerHTML = `
                <i class="fa-solid fa-mug-hot"></i>

                <h3>Belum ada tugas</h3>

                <p>Tambahkan tugas baru untuk memulai.</p>
            `;

        } else {

            emptyState.style.display = "none";

        }

        return;
    }


    // ==========================
    // TIDAK ADA HASIL SEARCH
    // ==========================

    if (!found) {

        emptyState.style.display = "block";

        emptyState.innerHTML = `
            <i class="fa-solid fa-magnifying-glass"></i>

            <h3>Tidak ada tugas dalam nama "${searchInput.value}"</h3>

            <p>Coba cari dengan kata kunci lain.</p>
        `;

    } else {

        emptyState.style.display = "none";

    }

});


// ==========================
// JUMLAH TUGAS
// ==========================

function updateTaskCount() {

    const tasks = taskList.querySelectorAll("li");

    let remaining = 0;


    tasks.forEach(function (task) {

        if (!task.classList.contains("completed")) {
            remaining++;
        }

    });


    taskCount.textContent = remaining;
}


// ==========================
// PROGRESS BAR
// ==========================

function updateProgress() {

    const tasks = taskList.querySelectorAll("li");

    const totalTasks = tasks.length;

    const completedTasks = taskList.querySelectorAll(
        "li.completed"
    ).length;


    // if (totalTasks === "") {

    //     progressFill.style.width = "0%";

    //     return;
    // }


    const percentage =
        (completedTasks / totalTasks) * 100;


    progressFill.style.width = percentage + "%";
}


// ==========================
// EMPTY STATE
// ==========================

function updateEmptyState() {

    const tasks = taskList.querySelectorAll("li");


    if (tasks.length === 0) {

        emptyState.style.display = "block";

        emptyState.innerHTML = `
            <i class="fa-solid fa-mug-hot"></i>

            <h3>Belum ada tugas</h3>

            <p>Tambahkan tugas baru untuk memulai.</p>
        `;

    } else {

        emptyState.style.display = "none";

    }
}


// ==========================
// SAAT HALAMAN DIBUKA
// ==========================

updateTaskCount();
updateEmptyState();
updateProgress();