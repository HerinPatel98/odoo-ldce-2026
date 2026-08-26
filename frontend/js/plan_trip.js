document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('coverPhoto');
  const uploadPrompt = document.getElementById('uploadPrompt');
  const previewContainer = document.getElementById('previewContainer');
  const previewImg = document.getElementById('coverPhotoPreview');
  const removePhotoBtn = document.getElementById('removePhotoBtn');
  const discardBtn = document.getElementById('discardBtn');
  const tripForm = document.getElementById('tripForm');

  const resetPhotoUpload = () => {
    fileInput.value = '';
    previewImg.src = '';
    previewContainer.classList.add('d-none');
    uploadPrompt.classList.remove('d-none');
  };

  fileInput?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit.');
        resetPhotoUpload();
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        previewImg.src = event.target.result;
        uploadPrompt.classList.add('d-none');
        previewContainer.classList.remove('d-none');
      };
      reader.readAsDataURL(file);
    }
  });

  removePhotoBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    resetPhotoUpload();
  });

  discardBtn?.addEventListener('click', () => {
    tripForm.reset();
    resetPhotoUpload();
  });
});
