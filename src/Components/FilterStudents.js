import React, { useState } from 'react';

function FilterStudents() {
  const [file, setFile] = useState(null);
  const [criteria, setCriteria] = useState({
    tenth: '',
    twelfth: '',
    cgpa: '',
    backlogs: '',
  });

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('excel', file);
    formData.append('criteria', JSON.stringify(criteria));

    const res = await fetch('http://localhost:9000/api/filter-students', {
      method: 'POST',
      body: formData,
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Filtered_Students.xlsx';
    a.click();
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📂 Upload Excel & Filter</h2>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input placeholder="Min 10th %" onChange={(e) => setCriteria({...criteria, tenth: e.target.value})} />
        <input placeholder="Min 12th %" onChange={(e) => setCriteria({...criteria, twelfth: e.target.value})} />
        <input placeholder="Min CGPA" onChange={(e) => setCriteria({...criteria, cgpa: e.target.value})} />
        <input placeholder="Max Backlogs" onChange={(e) => setCriteria({...criteria, backlogs: e.target.value})} />
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        🎯 Apply Filter & Download
      </button>
    </div>
  );
}

export default FilterStudents;
