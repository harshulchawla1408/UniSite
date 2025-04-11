import { useState } from 'react';
import axios from 'axios';

function ExcelFilterForm() {
  const [file, setFile] = useState(null);
  const [filters, setFilters] = useState({
    tenth: '',
    twelfth: '',
    cgpa: '',
    backlogsAllowed: ''
  });

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('excel', file);
    formData.append('filters', JSON.stringify(filters));

    const res = await axios.post('http://localhost:9000/filter-excel', formData, {
      responseType: 'blob',
    });

    // Download filtered Excel file
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'filtered_students.xlsx');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>🎯 Filter Students</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Upload Excel File:</label>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} required style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Minimum 10th %:</label>
          <input type="number" name="tenth" placeholder="Min 10th %" onChange={handleFilterChange} style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Minimum 12th %:</label>
          <input type="number" name="twelfth" placeholder="Min 12th %" onChange={handleFilterChange} style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Minimum CGPA:</label>
          <input type="number" name="cgpa" placeholder="Min CGPA" onChange={handleFilterChange} style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Max Backlogs Allowed:</label>
          <input type="number" name="backlogsAllowed" placeholder="Max Backlogs Allowed" onChange={handleFilterChange} style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }} />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}>
          Filter & Download
        </button>
      </form>
    </div>
  );
}

export default ExcelFilterForm;