import React from 'react';

export default function RequestForm() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Request Service</h1>
      <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input type="text" name="name" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Service Type</label>
          <textarea name="etext" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input type="text" name="email" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
          <textarea name="description" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
        </div>

        <button type="submit" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit Request</button>
      </form>
    </div>
  );
}


