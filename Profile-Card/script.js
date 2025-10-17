
const editProfileBtn = document.getElementById('edit-profile-btn');
        const editForm = document.querySelector('.edit-form');
        const nameSpan = document.querySelector('.name');
        const mailidSpan = document.querySelector('.mailid');
        const jobSpan = document.querySelector('.job');
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        const jobInput = document.getElementById('job-input');
        const saveBtn = document.getElementById('save-btn');
        const cancelBtn = document.getElementById('cancel-btn');

        editProfileBtn.addEventListener('click', () => {
            editForm.classList.remove('hidden');
            nameInput.value = nameSpan.textContent;
            emailInput.value = mailidSpan.textContent;
            jobInput.value = jobSpan.textContent;
        });

        saveBtn.addEventListener('click', () => {
            nameSpan.textContent = nameInput.value;
            mailidSpan.textContent = emailInput.value;
            jobSpan.textContent = jobInput.value;
            editForm.classList.add('hidden');
        });

        cancelBtn.addEventListener('click', () => {
            editForm.classList.add('hidden');
        });
