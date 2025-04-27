import { useState } from 'react';
import axios from 'axios';

function ExcelFilterForm() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filters, setFilters] = useState({
    tenth: '',
    twelfth: '',
    cgpa: '',
    backlogsAllowed: ''
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0]?.name || '');
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('excel', file);
    formData.append('filters', JSON.stringify(filters));

    try {
      const res = await axios.post('http://localhost:9000/api/filter-excel', formData, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filtered.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error while submitting the form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📊 Upload Excel & Apply Filters</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Upload Excel File</label>
            <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} required />
            {fileName && <p style={styles.fileName}>📁 {fileName}</p>}
          </div>

          <div style={styles.inputGroup}>
            <label>Minimum 10th Marks (%)</label>
            <input
              type="number"
              name="tenth"
              value={filters.tenth}
              onChange={handleFilterChange}
              placeholder="e.g. 60"
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Minimum 12th Marks (%)</label>
            <input
              type="number"
              name="twelfth"
              value={filters.twelfth}
              onChange={handleFilterChange}
              placeholder="e.g. 65"
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Minimum CGPA</label>
            <input
              type="number"
              name="cgpa"
              value={filters.cgpa}
              onChange={handleFilterChange}
              placeholder="e.g. 7.5"
              step="0.1"
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Backlogs Allowed?</label>
            <select name="backlogsAllowed" value={filters.backlogsAllowed} onChange={handleFilterChange}>
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
            {isSubmitting ? '⏳ Filtering...' : '🚀 Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #e0f7fa,rgb(190, 203, 231))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.3s ease-in',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#4a148c',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  fileName: {
    marginTop: '5px',
    fontSize: '0.9rem',
    color: '#666',
  },
  submitBtn: {
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
  },
};

export default ExcelFilterForm;
