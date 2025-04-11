import React, { useState } from 'react';

function FilterStudents() {
  const [file, setFile] = useState(null);
  const [criteria, setCriteria] = useState({
    tenth: '0',
    twelfth: '0',
    cgpa: '0',
    backlogs: '0',
  });

  const handleUpload = async () => {
    try {
      // Show loading state
      const loadingMessage = document.createElement('div');
      loadingMessage.textContent = 'Filtering students...';
      loadingMessage.style.position = 'fixed';
      loadingMessage.style.top = '50%';
      loadingMessage.style.left = '50%';
      loadingMessage.style.transform = 'translate(-50%, -50%)';
      loadingMessage.style.padding = '20px';
      loadingMessage.style.background = '#fff';
      loadingMessage.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
      loadingMessage.style.borderRadius = '5px';
      loadingMessage.style.zIndex = '1000';
      document.body.appendChild(loadingMessage);

      const filterData = {
        tenthMarks: parseFloat(criteria.tenth),
        twelfthMarks: parseFloat(criteria.twelfth),
        cgpa: parseFloat(criteria.cgpa),
        backlogs: parseInt(criteria.backlogs),
        jeePercentile: 0,
        relocate: ''
      };

      console.log('Sending filter data:', filterData);

      const res = await fetch('http://localhost:9000/api/filter-students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filterData)
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const blob = await res.blob();
      if (blob.size === 0) {
        throw new Error('Received empty file from server');
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Filtered_Students_${new Date().toISOString().split('T')[0]}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error during filtering:', error);
      alert(`Error: ${error.message}`);
    } finally {
      // Remove loading message
      const loadingMessage = document.querySelector('div');
      if (loadingMessage) {
        document.body.removeChild(loadingMessage);
      }
    }
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
