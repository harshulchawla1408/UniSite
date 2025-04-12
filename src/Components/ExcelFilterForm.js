// import { useState } from 'react';
// import axios from 'axios';

// function ExcelFilterForm() {
//   const [file, setFile] = useState(null);
//   const [filters, setFilters] = useState({
//     tenth: '',
//     twelfth: '',
//     cgpa: '',
//     backlogsAllowed: ''
//   });

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('excel', file);
//     formData.append('filters', JSON.stringify(filters));
  
//     try {
//       const res = await axios.post('http://localhost:9000/api/filter-excel', formData, {
//         responseType: 'blob',
//       });
  
//       // Download filtered Excel file
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'filtered.xlsx');
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (error) {
//       console.error('Error while submitting the form:', error);
//     }
//   };

//   return (
//     <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
//       <form onSubmit={handleSubmit} style={{
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//         maxWidth: '500px',
//       }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>🎯 Filter Students</h2>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Upload Excel File:</label>
//           <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} required style={{
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #ddd',
//             borderRadius: '4px',
//           }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Minimum 10th %:</label>
//           <input type="number" name="tenth" placeholder="Min 10th %" onChange={handleFilterChange} style={{
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #ddd',
//             borderRadius: '4px',
//           }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Minimum 12th %:</label>
//           <input type="number" name="twelfth" placeholder="Min 12th %" onChange={handleFilterChange} style={{
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #ddd',
//             borderRadius: '4px',
//           }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Minimum CGPA:</label>
//           <input type="number" name="cgpa" placeholder="Min CGPA" onChange={handleFilterChange} style={{
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #ddd',
//             borderRadius: '4px',
//           }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Max Backlogs Allowed:</label>
//           <input type="number" name="backlogsAllowed" placeholder="Max Backlogs Allowed" onChange={handleFilterChange} style={{
//             width: '100%',
//             padding: '10px',
//             border: '1px solid #ddd',
//             borderRadius: '4px',
//           }} />
//         </div>
//         <button type="submit" style={{
//           width: '100%',
//           padding: '12px',
//           backgroundColor: '#007BFF',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           fontWeight: 'bold',
//           cursor: 'pointer',
//           transition: 'background-color 0.3s ease',
//         }}>
//           Filter & Download
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ExcelFilterForm;
import { useState } from 'react';
import axios from 'axios';

function ExcelFilterForm() {
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
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
    setFilters({ ...filters, [e.target.name]: e.target.value });
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
  
      // Download filtered Excel file
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filtered.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error while submitting the form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Inline styles
  const styles = {
    container: {
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 100px)',
      padding: '1rem',
      backgroundColor: '#f9fafb',
    },
    formWrapper: {
      width: '100%',
      maxWidth: '500px',
      animation: 'fadeIn 0.5s ease-out',
    },
    form: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    header: {
      backgroundColor: '#2563eb',
      padding: '1.5rem',
      color: 'white',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
    },
    subtitle: {
      marginTop: '0.5rem',
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    body: {
      padding: '1.5rem',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.25rem',
    },
    input: {
      width: '100%',
      padding: '0.625rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      transition: 'all 0.2s ease',
    },
    fileUploadContainer: {
      position: 'relative',
    },
    fileInput: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    },
    fileUploadLabel: {
      width: '100%',
      cursor: 'pointer',
    },
    fileUploadButton: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.625rem',
      backgroundColor: '#f3f4f6',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      color: '#6b7280',
      fontSize: '0.875rem',
      transition: 'all 0.2s ease',
    },
    filterGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth >= 640 ? '1fr 1fr' : '1fr',
      gap: '1rem',
    },
    footer: {
      padding: '0 1.5rem 1.5rem',
    },
    submitButton: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.75rem 1rem',
      backgroundColor: isSubmitting || !file ? '#93c5fd' : '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: '500',
      fontSize: '0.875rem',
      cursor: isSubmitting || !file ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem',
      marginRight: '0.5rem',
      stroke: 'currentColor',
      fill: 'none',
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '1rem',
      height: '1rem',
      marginRight: '0.5rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 0.8s linear infinite',
    },
    footerText: {
      marginTop: '1rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#6b7280',
    },
  };

  // Adding the animation keyframes to the document
  const addKeyframes = () => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
  };

  // Add the keyframes when component mounts
  useState(() => {
    addKeyframes();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.header}>
            <div style={styles.title}>
              <span>🎯</span> Student Filter Tool
            </div>
            <div style={styles.subtitle}>
              Upload and filter student data based on criteria
            </div>
          </div>
          
          <div style={styles.body}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Upload Excel File</label>
              <div style={styles.fileUploadContainer}>
                <input 
                  type="file" 
                  accept=".xlsx, .xls" 
                  onChange={handleFileChange} 
                  required 
                  style={styles.fileInput} 
                  id="file-upload"
                />
                <label 
                  htmlFor="file-upload" 
                  style={styles.fileUploadLabel}
                >
                  <div style={styles.fileUploadButton}>
                    <svg style={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        stroke="currentColor"
                        fill="none" />
                    </svg>
                    {fileName ? fileName : "Choose Excel file"}
                  </div>
                </label>
              </div>
            </div>
            
            <div style={styles.filterGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Minimum 10th %</label>
                <input 
                  type="number" 
                  name="tenth" 
                  placeholder="e.g., 75" 
                  onChange={handleFilterChange} 
                  style={styles.input} 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Minimum 12th %</label>
                <input 
                  type="number" 
                  name="twelfth" 
                  placeholder="e.g., 70" 
                  onChange={handleFilterChange} 
                  style={styles.input} 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Minimum CGPA</label>
                <input 
                  type="number" 
                  name="cgpa" 
                  placeholder="e.g., 7.5" 
                  onChange={handleFilterChange} 
                  style={styles.input} 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Max Backlogs Allowed</label>
                <input 
                  type="number" 
                  name="backlogsAllowed" 
                  placeholder="e.g., 2" 
                  onChange={handleFilterChange} 
                  style={styles.input} 
                />
              </div>
            </div>
          </div>
          
          <div style={styles.footer}>
            <button 
              type="submit" 
              disabled={isSubmitting || !file}
              style={styles.submitButton}
            >
              {isSubmitting ? (
                <>
                  <div style={styles.loadingSpinner}></div>
                  Processing...
                </>
              ) : (
                <>
                  <svg style={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      stroke="currentColor"
                      fill="none" />
                  </svg>
                  Filter & Download
                </>
              )}
            </button>
          </div>
        </form>
        
        <div style={styles.footerText}>
          Filter students based on academic criteria and download the results
        </div>
      </div>
    </div>
  );
}

export default ExcelFilterForm;