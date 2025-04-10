import React, { useState } from 'react';

function FilterFormModal({ onClose }) {
  const [filters, setFilters] = useState({
    cgpa: '',
    backlogs: '',
    tenthMarks: '',
    twelfthMarks: '',
    jeePercentile: '',
    relocate: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/filter-students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filters),
      });

      if (!response.ok) throw new Error('Server error');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filtered_students.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      alert('🎉 Excel downloaded successfully!');
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Failed to download filtered Excel');
    }
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>🔍 Filter Students</h2>

        <input type="number" name="cgpa" placeholder="Minimum CGPA" onChange={handleChange} />
        <input type="number" name="backlogs" placeholder="Max Backlogs" onChange={handleChange} />
        <input type="number" name="tenthMarks" placeholder="Min 10th Marks" onChange={handleChange} />
        <input type="number" name="twelfthMarks" placeholder="Min 12th Marks" onChange={handleChange} />
        <input type="number" name="jeePercentile" placeholder="Min JEE Percentile" onChange={handleChange} />
        <input type="text" name="relocate" placeholder="Willing to Relocate (yes/no)" onChange={handleChange} />

        <div style={{ marginTop: '15px' }}>
          <button style={modalStyles.submit} onClick={handleSubmit}>Download Excel</button>
          <button style={modalStyles.cancel} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  submit: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '6px',
    border: 'none',
    marginRight: '10px',
    cursor: 'pointer',
  },
  cancel: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '10px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default FilterFormModal;
